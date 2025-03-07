function compareVersion(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
  
    for (let i = 0; i < v1.length || i < v2.length; ++i) {
      let x = 0, y = 0;
  
      if (i < v1.length) {
        x = parseInt(v1[i], 10);
      }
      if (i < v2.length) {
        y = parseInt(v2[i], 10);
      }
  
      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
    }

    return 0;
  }
  