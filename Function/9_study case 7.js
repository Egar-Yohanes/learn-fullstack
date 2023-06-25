function printWatches(watches) {
    if (watches.length !== 0) {
      let result = "Saya punya ";
      if (watches.length > 1) {
        for (let i = 0; i < watches.length; i++) {
          if (i !== watches.length - 1) {
            result += watches[i] + ", ";
          } else {
            result += "dan " + watches[i] + ".";
          }
        }
      } else {
        result += watches[0] + ".";
      }
      return result;
    } else {
      return "Tidak punya jam tangan, thanks.";
    }
  }
  
  // Test Case
  console.log(printWatches(["Fossil", "Rolex", "Joger"]));
  console.log(printWatches(["Tests"]));
  console.log(printWatches([]));