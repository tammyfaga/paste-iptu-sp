
((document) => {
  
  const main = () => {
    const allowPaste = function(e){
      e.stopImmediatePropagation();
      return true;
    };

    document.addEventListener('paste', allowPaste, true);
  }

  main();

})(document)
