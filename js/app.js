var masonry = new Macy({
    container: '#macy-container',
    trueOrder: false,
    waitForImages: true,
    debug: true,
    margin: 1,
    columns: 3,
    breakAt: {
      1200: 3,
      940: 2,
      520: 1
  }
  });