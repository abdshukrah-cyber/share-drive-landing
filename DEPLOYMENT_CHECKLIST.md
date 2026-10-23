# Deployment Checklist

## Pre-Deployment

### Code Review
- [ ] Review `payment-callback-client.tsx` changes
- [ ] Verify `next.config.mjs` cache headers
- [ ] Check TypeScript compilation (no errors)
- [ ] Run ESLint if configured

### Testing
- [ ] Test all query parameter formats
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Test copy button functionality
- [ ] Test with network offline
- [ ] Verify responsive design on all breakpoints
- [ ] Test accessibility with screen reader

### Documentation
- [ ] Read `OPTIMIZATION_SUMMARY.md`
- [ ] Review `QUICK_REFERENCE.md`
- [ ] Share with team
- [ ] Update internal wiki (if applicable)

---

## Staging Deployment

### Before Deploy
- [ ] Create feature branch
- [ ] Run full test suite
- [ ] Build project locally (`pnpm build`)
- [ ] Test build output

### Deploy to Staging
```bash
# Merge to staging branch
git push origin main:staging

# Vercel auto-deploys staging
# Verify deployment successful
```

### Staging Tests
- [ ] Access https://staging.sharedrive.ng/payment/callback
- [ ] Test all query parameter formats
- [ ] Test mobile redirect
- [ ] Monitor console for errors
- [ ] Check performance metrics
- [ ] Verify cache headers: `curl -I https://staging.sharedrive.ng/payment/callback`

---

## Production Deployment

### Final Checks
- [ ] All tests passing
- [ ] Staging deployment successful
- [ ] No open issues or TODOs
- [ ] All documentation complete
- [ ] Team approval obtained

### Deploy to Production
```bash
# This will trigger production deployment
git push origin main

# Vercel auto-deploys to production
# Monitor deployment in Vercel dashboard
```

### Post-Deploy Verification
- [ ] Verify deployment successful
- [ ] Check https://sharedrive.ng/payment/callback loads
- [ ] Test query parameters work
- [ ] Verify cache headers: `curl -I https://sharedrive.ng/payment/callback`
- [ ] Monitor error logs
- [ ] Check analytics/logs

---

## Mobile App Update

### If You Have a Mobile App
- [ ] Configure deep link in AndroidManifest.xml (if Android)
- [ ] Configure deep link in Info.plist (if iOS)
- [ ] Handle deep link parameters in payment callback activity/view controller
- [ ] Test deep link with: `adb shell am start -W -a android.intent.action.VIEW -d "com.maoltech.sharedrive://payment/callback?status=success"`
- [ ] Release new mobile app version
- [ ] Announce update to users (if auto-update not enabled)

---

## Payment Provider Update

### Update Callback URLs
- [ ] **Flutterwave**: Update callback URL to `https://sharedrive.ng/payment/callback`
- [ ] **Paystack**: Update callback URL to `https://sharedrive.ng/payment/callback`
- [ ] **Other providers**: Update as needed
- [ ] Test with sandbox/test environment first
- [ ] Verify live environment after testing

### Provider Settings to Check
- [ ] Callback URL configured correctly
- [ ] Payment parameters sent in expected format
- [ ] Test payments go through successfully
- [ ] Production payments route correctly

---

## Monitoring (First 24-48 hours)

### Watch For
- [ ] Payment callback success rate (target: 99%+)
- [ ] Error logs for common issues
- [ ] Mobile redirect success rate
- [ ] Deep link activation rate (if mobile app supports it)
- [ ] User support tickets

### Metrics to Track
```
Dashboard:
- Total callbacks received
- Success rate
- Failed redirects
- Average page load time
- Copy button usage
- Status distribution
```

### Alert Conditions
- [ ] Callback success rate drops below 95%
- [ ] Spike in console errors
- [ ] Response time > 2 seconds
- [ ] High copy button failure rate

---

## Rollback Plan

### If Critical Issues Occur
```bash
# Immediate: Revert the deployment
git revert <commit-hash>
git push origin main

# Vercel will auto-deploy the previous version
# Should be live within 1-2 minutes
```

### Post-Rollback
- [ ] Investigate root cause
- [ ] Fix issue locally
- [ ] Deploy to staging
- [ ] Test thoroughly
- [ ] Deploy to production again

---

## Known Limitations

- [ ] Deep link scheme must be configured in mobile app
- [ ] Payment parameters limited by URL length (rarely an issue)
- [ ] Clipboard API requires HTTPS (production only)
- [ ] Mobile redirect timeout is 1.5 seconds (can be adjusted)

---

## Success Criteria

✅ Deployment is successful when:

1. **Functionality**
   - [ ] Callback page loads correctly
   - [ ] Status displays accurately
   - [ ] Payment info shown correctly
   - [ ] Copy button works

2. **Performance**
   - [ ] Page load time < 1 second
   - [ ] Redirect happens within 2 seconds
   - [ ] No console errors

3. **Compatibility**
   - [ ] Works on all major browsers
   - [ ] Responsive on mobile/tablet/desktop
   - [ ] Works with all payment providers
   - [ ] Backward compatible with old URLs

4. **User Experience**
   - [ ] Users can copy payment reference
   - [ ] Mobile users redirected to app
   - [ ] Clear status feedback
   - [ ] No confusing error messages

5. **Monitoring**
   - [ ] Logs being captured
   - [ ] Errors being tracked
   - [ ] Performance metrics visible
   - [ ] No alerts triggered

---

## Rollback Trigger Points

⚠️ **Trigger rollback if:**
- [ ] Payment success rate < 90%
- [ ] More than 10 error logs per minute
- [ ] Mobile app crashes with deep link
- [ ] Callback page times out frequently
- [ ] Critical security issue discovered

---

## Post-Deployment (Next 7 Days)

### Daily
- [ ] Check error logs
- [ ] Review success rate
- [ ] Monitor user feedback
- [ ] Check performance metrics

### After 1 Week
- [ ] Generate deployment report
- [ ] Document any issues
- [ ] Gather user feedback
- [ ] Plan any improvements

### Documentation
- [ ] Update team wiki with new process
- [ ] Document any provider-specific issues
- [ ] Create runbooks for common issues
- [ ] Share lessons learned with team

---

## Contact & Support

### If Issues Occur
- [ ] Check console logs (F12)
- [ ] Review `OPTIMIZATION_GUIDE.md` troubleshooting section
- [ ] Check `QUICK_REFERENCE.md` for common issues
- [ ] Review payment provider documentation
- [ ] Contact support team

### Documentation Links
- Quick Start: `README_OPTIMIZATION.md`
- Integration Guide: `OPTIMIZATION_GUIDE.md`
- API Reference: `QUICK_REFERENCE.md`
- Before/After: `VISUAL_COMPARISON.md`
- Code Changes: `CODE_CHANGES.md`

---

## Sign-Off

- [ ] Code Review: ________________ Date: _______
- [ ] QA Testing: ________________ Date: _______
- [ ] Product: ________________ Date: _______
- [ ] Deployment: ________________ Date: _______

---

**Ready to Deploy! 🚀**

After completing this checklist, the payment callback optimization is production-ready.
