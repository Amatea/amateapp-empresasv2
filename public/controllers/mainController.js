angular.module('huellas')

.controller('ExampleController', ['$scope', 'Authentication', '$window', 'Articles',
  function($scope, Authentication, $window, Articles) {
    $scope.authentication = Authentication;

    $scope.users = Articles.query(function(dato){
      console.log(dato);
    });
      

}])

.controller('huellatoolController', ['$scope', function($scope) {
  $scope.url = '#!/siembras';
}])

.controller('mapController', [ '$scope', function($scope) {
    angular.extend($scope, {
                yanaconas: {
                    lat: 3.6315515417373687,
                    lng: -76.50981903076172,
                    zoom: 13
                },
                defaults: {
                    zoomAnimation: false,
                    markerZoomAnimation: false,
                    fadeAnimation: false,
                    scrollWheelZoom: false
                }
            });
}])

.controller('GalleryCtrl', function ($scope) {

    $scope.dataArray = [
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/1.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/2.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/3.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/4.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/5.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/6.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/7.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/8.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2015/9.jpg'
      }
    ];

     $scope.dataArray2015 = [
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/1a.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/2.jpg'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/3.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/4.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/5.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/6.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/7.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/8.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/9.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/10.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/11.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/12.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/13.JPG'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/14.jpg'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/15.JPG'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/16.JPG'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/17.JPG'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/18.JPG'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/19.JPG'
      },
       {
        src: 'https://s3-us-west-2.amazonaws.com/amateapp-empresas/sidoc/2014/20.JPG'
      }

    ];
})