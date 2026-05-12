# Payment Callback Quick Reference

## 🔗 Deep Link Scheme
```
com.example.shared_drive://payment/callback?status=success&tx_ref=ABC123&amount=5000
```

## 📍 Callback Route
```
https://sharedrive.ng/payment/callback
```

## ✅ Status Values (All Supported)
| Input | Normalized To |
|-------|---------------|
| `successful`, `success`, `completed`, `paid` | `success` ✓ |
| `failed`, `cancelled`, `canceled`, `declined` | `failed` ✗ |
| Anything else | `pending` ⟳ |

## 🏷️ Query Parameter Names
### Status
- `status`
- `paymentStatus`
- `payment_status`

### Reference
- `tx_ref` (Flutterwave)
- `paymentReference`
- `transactionReference`
- `reference`

### Transaction ID
- `transaction_id`
- `transactionId`
- `transactionReference`

### Amount
- `amount`
- `transaction_amount`

## 🧪 Test URLs
```
# Success
/payment/callback?status=successful&tx_ref=TEST_123&amount=5000

# Failed
/payment/callback?status=failed&reference=FAIL_456

# Pending
/payment/callback?status=processing

# Full parameters
/payment/callback?status=success&tx_ref=tx_789&transaction_id=txid_999&amount=15000
```

## 📱 Mobile Integration

### Android Manifest Entry
```xml
<activity android:name=".PaymentCallbackActivity" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="com.example.shared_drive"
              android:host="payment"
              android:pathPrefix="/callback" />
    </intent-filter>
</activity>
```

### Receive in App
```typescript
// React Native
Linking.parse(url).queryParams
// Returns: { status, tx_ref, amount, transaction_id }

// Flutter
deepLink.queryParameters
// Returns: { status, tx_ref, amount, transaction_id }
```

## 🔄 Redirect Flow
```
1. Payment Provider → Callback URL
   ↓
2. Deep Link Attempt (immediate)
   ↓
3. App Open? → YES → Success ✓
   ↓ NO
4. Wait 1.5 seconds
   ↓
5. Fallback to Web URL
```

## 🎨 Status Display
```
SUCCESS (Green ✓)
- Icon: Check circle
- Badge: bg-emerald-50, text-emerald-700
- Message: Payment received

FAILED (Red ✗)
- Icon: Error circle  
- Badge: bg-rose-50, text-rose-700
- Message: Payment not completed

PENDING (Amber ⟳)
- Icon: Loading spinner
- Badge: bg-amber-50, text-amber-700
- Message: Confirming payment
```

## 🛠️ Setup Checklist
- [ ] Configure Android deep link in mobile app
- [ ] Update payment provider callback URL
- [ ] Test with staging environment
- [ ] Deploy to production
- [ ] Monitor callback success rate
- [ ] Update mobile app version with deep link support

## 🐛 Debug Logging
Console messages appear with `[v0]` prefix:
```
[v0] Current URL: https://...
[v0] Query Params: { status, tx_ref, amount, ... }
[v0] Deep Link URL: com.example.shared_drive://...
[v0] Status: success
[v0] Failed to copy reference: [Error]
```

## 🔒 Security Notes
- ✅ Payment page never cached
- ✅ HTTPS only in production
- ✅ No sensitive data in URLs
- ✅ Parameters sanitized in deep links
- ✅ Session storage (not localStorage) for redirect tracking

## 📊 Query Parameter Flow
```
Payment Provider sends:
  ↓
Web Callback receives parameters
  ↓
Normalizes status & reference names
  ↓
Builds deep link URL
  ↓
Attempts deep link open
  ↓
Mobile app receives all parameters
```

## 💾 Files Modified
1. `app/payment/callback/payment-callback-client.tsx` - Main component
2. `next.config.mjs` - Cache headers
3. `OPTIMIZATION_GUIDE.md` - Full documentation
4. `OPTIMIZATION_SUMMARY.md` - Overview

## 📞 Common Issues

**Deep link not opening?**
- Check AndroidManifest.xml scheme matches `com.example.shared_drive`
- Verify app is installed
- Test with different payment provider

**Parameters missing?**
- Check query parameter names match ones in normalization function
- Verify payment provider sends parameters
- Use test URLs to debug

**Copy not working?**
- Ensure HTTPS connection
- Check browser console for clipboard errors
- May need user permission on some browsers

---

**Last Updated:** May 12, 2026
**Version:** 1.0.0
**Status:** Production Ready ✅
