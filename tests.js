QUnit.done(function(results){
  window.global_test_results = results;
});

function xhr() {
  if (typeof window.XMLHttpRequest != "undefined"){
      return new XMLHttpRequest();
  }

  if (typeof window.ActiveXObject != "undefined"){
    try { return new ActiveXObject("Msxml2.XMLHTTP.4.0"); } catch(e) {}
    try { return new ActiveXObject("MSXML2.XMLHTTP"); } catch(e) {}
    try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
  }

  return undefined;
}

test("Detected xhr.upload", function(){
  ok(Object.keys(xhr()).indexOf("upload") >= 0, "OK!")
});

test("Detected xhr.upload.onprogress", function(){
  ok(Object.keys(xhr().upload).indexOf("onprogress") >= 0, "OK!")
});
