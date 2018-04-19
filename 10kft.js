$(document).ready(function() {
  var prodUserId = 'a9ccdad7-2843-4992-9c77-893d91a03df8';
  var prodEndpoint = '/api/v1/users/' + prodUserId + '/time_entries';
  var prodUrl = 'https://api.10000ft.com' + prodEndpoint;
  var prodAuthToken = 'bk93NGlXOVVIbWZoaDFYdHJKTE01VTVTcGVGNWlxRmRsUC8wcXpKNlBXcUd3OFh3b3BveWJqRlJyZzVOClhzRWE4Vm8xYTBSTkxjVHlQS1lEbXpCaFp4eUFMOGkvZHQ2ekFHcGRNUFBkRVZla2xOK1plemVjc04ySApFMVYzaXkzbgo=';

  var stagingUserId = '04267fdc-b218-4c64-96a3-dfd6c9deee11';
  var stagingEndpoint = '/api/v1/users/' + stagingUserId + '/time_entries';
  var stagingUrl = 'https://vnext-api.10000ft.com' + stagingEndpoint;
  var stagingAuthToken = 'WEwrN0Z6ZHJuMTNYU2lBMnF5ajJ4aW1icTd6OS9aM2RQNGMvWDVrRU5pSVprTHNlYVZyVHRQT1NUb1M0CkVWYk9ocFIxQmg4UGRxWVNVZTFZbm0raUl5ekNnSlZ3eStlNEVtb09OSlNOQi9zdXNHMUxxK1FBYXVCdgpnZXJIZ0tTSAo=';

  var data = {
    
  };

  $.ajax({
    url: prodUrl,
    type : "GET",
    data: data,
    headers: { "Content-Type": "application/json", "auth": prodAuthToken, "Access-Control-Allow-Origin": "*" },
    success: function(response) {
      console.log(response);
    },
    error: function(error) {
      console.log('error');
      console.log(error);
    }
  });
});