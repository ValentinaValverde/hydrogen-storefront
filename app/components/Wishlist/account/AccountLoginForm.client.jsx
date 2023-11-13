const savedSwymLocalStorage = getSwymLocalStorage();
if (savedSwymLocalStorage && savedSwymLocalStorage.regid) {
  // we will sync activities done by anonymous regid with useremail
  callValidateSyncRegidAPI({
    useremail: email,
    regid: savedSwymLocalStorage.regid,
  });
} else {
  callGenrateRegidAPI({
    useremail: email,
  });
}
