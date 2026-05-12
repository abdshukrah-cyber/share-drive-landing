# ShareDrive Payment Callback Optimization Guide

## Overview
This document outlines the optimizations made to the payment callback route for better mobile integration, query parameter handling, and UI/UX improvements.

---

## 1. Deep Link Implementation ✅

### What Changed
Added support for the **`com.example.shared_drive`** deep link scheme to enable seamless mobile app redirection.

### How It Works
```typescript
const DEEP_LINK_SCHEME = "com.example.shared_drive";

// Deep link format:
// com.example.shared_drive://payment/callback?status=success&tx_ref=ABC123&amount=5000
```

### Mobile Flow
1. User completes payment on external provider (e.g., Flutterwave, Paystack)
2. Callback redirected to: `https://sharedrive.ng/payment/callback?status=success&tx_ref=ABC123...`
3. Page attempts to open deep link: `com.example.shared_drive://payment/callback?status=success&...`
4. If deep link fails (app not installed), falls back to web URL after 1.5s
5. All payment parameters are preserved and passed to mobile app

### Implementation in AndroidManifest.xml
Add this to your mobile app's `AndroidManifest.xml`:

```xml
<activity
    android:name=".PaymentCallbackActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data
            android:scheme="com.example.shared_drive"
            android:host="payment"
            android:pathPrefix="/callback" />
    </intent-filter>
</activity>
```

---

## 2. Query Parameter Handling 📋

### Supported Parameters
The callback now handles query parameters from multiple payment providers:

| Parameter | Alternative Names | Purpose |
|-----------|------------------|---------|
| `status` | `paymentStatus`, `payment_status` | Payment result |
| `tx_ref` | `paymentReference`, `transactionReference`, `reference` | Transaction reference |
| `transaction_id` | `transactionId`, `transactionReference` | Unique transaction ID |
| `amount` | `transaction_amount` | Payment amount |

### Example URLs
```
# Flutterwave-style
/payment/callback?status=successful&tx_ref=flw_tx_123&transaction_id=tx_456&amount=5000

# Paystack-style
/payment/callback?paymentStatus=success&transactionReference=ps_123&amount=5000

# Custom provider
/payment/callback?payment_status=completed&reference=ref_789&transaction_amount=10000
```

---

## 3. UI/UX Improvements 🎨

### Enhanced Visual Feedback

#### Status Indicators
- **Success**: Green badge with check icon (immediate wallet credit confirmation)
- **Failed**: Red badge with error icon (retry option)
- **Pending**: Amber badge with loading spinner (processing confirmation)

#### Dynamic Icon System
Each status has a unique icon that animates appropriately:
- Success: Static checkmark
- Failed: Static error icon
- Pending: Rotating spinner

#### Payment Summary Card
- Status badge with live indicator dot
- Amount display (formatted with currency symbol)
- Reference number with copy-to-clipboard button
- Transaction ID (when available)
- Info box with helpful guidance

### Responsive Design
- Mobile-first layout
- Grid layout adjusts from stacked (mobile) to side-by-side (desktop)
- Improved spacing and padding on all device sizes
- Better button states (loading state with spinner)

### Loading States
```typescript
// Button shows loading state during redirect
{isRedirecting ? (
  <>
    <LoadingIcon className="h-5 w-5" />
    Opening app...
  </>
) : (
  <>
    Open ShareDrive
    <ArrowRightIcon className="h-5 w-5" />
  </>
)}
```

---

## 4. Enhanced Error Handling 🛡️

### Status Normalization
The component normalizes various status values:
```typescript
function normalizeStatus(status: string | null) {
  const normalized = (status ?? "").toLowerCase().trim();
  
  // Success variations
  ["successful", "success", "completed", "paid"] → "success"
  
  // Failed variations
  ["failed", "cancelled", "canceled", "declined"] → "failed"
  
  // Anything else
  → "pending"
}
```

### Clipboard Error Handling
```typescript
const copyReference = async () => {
  if (!reference) return;
  
  try {
    await navigator.clipboard.writeText(reference);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  } catch (error) {
    console.error("[v0] Failed to copy reference:", error);
  }
};
```

---

## 5. Performance Optimizations ⚡

### Next.js Configuration
Added caching headers for payment callback route:

```javascript
// next.config.mjs
headers: async () => {
  return [
    {
      source: '/payment/callback',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache, no-store, must-revalidate',
        },
      ],
    },
  ];
}
```

This ensures payment data is never cached on the client or server.

### Optimized Redirects
- Deep link attempt happens immediately
- Fallback waits 1.5s before triggering web redirect
- Session storage prevents duplicate redirect attempts
- Mobile detection is accurate and efficient

---

## 6. Testing the Implementation

### Test URLs (for development)

```bash
# Test successful payment
http://localhost:3000/payment/callback?status=successful&tx_ref=TEST_123&amount=5000

# Test failed payment
http://localhost:3000/payment/callback?paymentStatus=failed&reference=FAIL_456

# Test pending status
http://localhost:3000/payment/callback?payment_status=processing

# Test with all parameters
http://localhost:3000/payment/callback?status=success&tx_ref=tx_789&transaction_id=txid_999&amount=15000
```

### Mobile Testing Checklist
- [ ] Deep link opens app when installed
- [ ] Falls back to web when app not installed
- [ ] Payment parameters preserved in deep link
- [ ] Copy button works correctly
- [ ] Status icons display correctly
- [ ] Dark mode works properly
- [ ] No redirect loop occurs

---

## 7. Integration with Payment Providers

### Flutterwave Integration
```javascript
// Callback URL in Flutterwave config
const flutterwaveConfig = {
  redirect_url: "https://sharedrive.ng/payment/callback"
};
// Flutterwave will append: ?status=successful&tx_ref=...&transaction_id=...
```

### Paystack Integration
```javascript
// Callback URL in Paystack config
const paystackConfig = {
  onClose: () => {
    // Redirect to callback with query params
    window.location.href = "https://sharedrive.ng/payment/callback?paymentStatus=...";
  }
};
```

---

## 8. Security Considerations 🔒

1. **Cache Headers**: Payment page is never cached to prevent stale data
2. **Session Storage**: Only tracks redirect attempts, not sensitive data
3. **Parameter Sanitization**: All query params are properly encoded in deep links
4. **No Sensitive Data in URL**: Never store passwords or tokens in callback URLs
5. **HTTPS Only**: Always use HTTPS in production (deep link scheme prevents redirect hijacking)

---

## 9. Mobile App Integration Example

### React Native Example
```typescript
// Handle deep link in React Native
import { useEffect } from 'react';
import { Linking } from 'react-native';

export function PaymentCallbackScreen() {
  useEffect(() => {
    const handleDeepLink = ({ url }) => {
      const parsed = Linking.parse(url);
      // parsed.queryParams contains: { status, tx_ref, amount, etc. }
      processPayment(parsed.queryParams);
    };

    Linking.addEventListener('url', handleDeepLink);
    
    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  return <PaymentConfirmationScreen />;
}
```

### Flutter Example
```dart
// Handle deep link in Flutter
class DeepLinkHandler {
  void initDeepLinkListener() {
    FirebaseDynamicLinks.instance.onLink.listen((dynamicLinkData) {
      final Uri deepLink = dynamicLinkData.link;
      // deepLink.queryParameters contains all payment data
      handlePaymentCallback(deepLink.queryParameters);
    });
  }
}
```

---

## 10. Migration Checklist

If migrating from old implementation:

- [ ] Update payment provider callback URLs to new endpoint
- [ ] Configure mobile app deep link scheme
- [ ] Test all payment provider integrations
- [ ] Update documentation with new query param names
- [ ] Deploy to staging and test end-to-end
- [ ] Monitor payment callback success rate
- [ ] Update mobile app to handle deep links

---

## Files Modified

1. **`app/payment/callback/payment-callback-client.tsx`**
   - Added deep link support
   - Enhanced query parameter handling
   - Improved UI with status icons
   - Better error handling and loading states

2. **`next.config.mjs`**
   - Added cache headers for payment callback route

---

## Support & Debugging

### Enable Debug Logging
Add to the callback component:
```typescript
useEffect(() => {
  console.log("[v0] Payment URL:", currentUrl);
  console.log("[v0] Query params:", Object.fromEntries(params));
  console.log("[v0] Deep link URL:", deepLinkUrl);
}, [currentUrl, params, deepLinkUrl]);
```

### Common Issues

**Deep link not opening app:**
- Verify scheme in AndroidManifest.xml matches `com.example.shared_drive`
- Check app is installed on device
- Ensure no redirect loop in app

**Payment data not appearing:**
- Check query parameters are being sent from provider
- Verify parameter names match those in normalization function
- Check browser console for errors

**Copy button not working:**
- Ensure HTTPS connection (required by Clipboard API)
- Check browser permissions

---

## Future Enhancements

- [ ] Add webhook verification for server-side confirmation
- [ ] Implement retry logic for failed payments
- [ ] Add analytics tracking for payment flow
- [ ] Support for multiple currency display
- [ ] SMS notification with payment reference
- [ ] Payment history in user dashboard

