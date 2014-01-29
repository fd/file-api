QUnit.done(function(results){
  window.global_test_results = results;
});

test("Detected xhr.upload", function(){
  var req = new XMLHttpRequest();
  notEqual(req.upload, false, "OK!")
});

test("Detected xhr.upload.onprogress", function(){
  var req = new XMLHttpRequest();
  notStrictEqual(req.upload.onprogress, undefined, "OK!")
});
