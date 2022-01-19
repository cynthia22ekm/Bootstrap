app.controller('customersCtrl', function($scope, $http) 
{


$scope.initial=function()
{
$scope.match=false;
$scope.tries=0;
$scope.columnindex=0;
$scope.btntext="Start Game";
$scope.rowindex=0;
$scope.cellindex=0;
$scope.matcount=0;  
$scope.count=0;
$scope.won=false;
$scope.firstcolumn=false;
$scope.secondcolumn=false;
$scope.exceeded=false;
$scope.index=[];
$scope.backimages=["https://ia2.pickupflowers.com/images/assets/images/flower-guide/national-flowers.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb806HjB0zsANNjQdfk4LIeYAJ3fhb4C7m6g&usqp=CAU",
"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
"https://images.fairtrade.net/product/_400x400_crop_center-center_82_none/infosite_flowers_18043_1440.jpg",
"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
"https://www.appleyardflowers.com/media/wysiwyg/2021/AP/spring-collection-2021-hero-mobile-min.jpg",
"https://static.onecms.io/wp-content/uploads/sites/34/2019/12/fragrant-flowers-intro-getty-1219.jpg",
"https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg"];


$scope.pairimages=["https://ia2.pickupflowers.com/images/assets/images/flower-guide/national-flowers.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb806HjB0zsANNjQdfk4LIeYAJ3fhb4C7m6g&usqp=CAU",
"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
"https://images.fairtrade.net/product/_400x400_crop_center-center_82_none/infosite_flowers_18043_1440.jpg",
"https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
"https://www.appleyardflowers.com/media/wysiwyg/2021/AP/spring-collection-2021-hero-mobile-min.jpg",
"https://static.onecms.io/wp-content/uploads/sites/34/2019/12/fragrant-flowers-intro-getty-1219.jpg",
"https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg"];
  $scope.frontimage="image/chessboard.png";
  $scope.displayimages=[];
  $scope.parkingPositionOI=[];
  $scope.matchingimages=[];
  $scope.parkingPositionUrl=$scope.backimages.concat($scope.pairimages);
  console.log($scope.parkingPositionUrl);
  var range = [];
  for(var i=0;i<4;i++) 
  {
    range[i]=i;
  }
  for(var k=0;k<16;k++) 
  {
    $scope.parkingPositionOI.push(1);
  }
  $scope.range = range;
  
  }
  document.getElementById("tb").className="inner";
$scope.initial();

$scope.distribute=function()
{
  var btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.disabled = true;
  console.log("scope.going");
  $scope.going = !$scope.going;
  $scope.backdistribute=true;
  $scope.backimages.sort(() => Math.random() - 0.5);
  $scope.pairimages.sort(() => Math.random() - 0.5);
  $scope.parkingPositionUrl.sort(() => Math.random() - 0.5);
  console.log("Displaying combined images");
  console.log($scope.parkingPositionUrl);
  document.getElementById("tb").className="outer";
  if ($scope.matcount==8)
  { 
      console.log("Matcount reached eight");
      
      btnSubmit.disabled = false;
      $scope.remove=!$scope.remove;
      $scope.initial();
      document.getElementById("tb").className="inner";
     
  }
  
  
  
}


$scope.frontturnover=function(column)
{

$scope.count++;
$scope.columnindex=column.$index;
console.log($scope.columnindex);

$scope.rowindex=column.$parent.i;


$scope.cellindex=(4*($scope.rowindex)+($scope.columnindex));
console.log("cellindex"+$scope.cellindex);

for(i=0;i<16;i++)
{
  if(i==($scope.cellindex))
  {

    
       
    $scope.displayimages[$scope.cellindex]=$scope.parkingPositionUrl[$scope.cellindex];
    console.log($scope.displayimages);
    $scope.parkingPositionOI[$scope.cellindex]=2;
    $scope.index.push($scope.cellindex);
    console.log("index array"+$scope.index);
    console.log("Num array"+$scope.parkingPositionOI);

    console.log($scope.matcount);   
    if($scope.count==2)
    {
      $scope.tries++;
    } 
    if(($scope.matcount==7) && ($scope.count==2))
            {
              console.log("Push the last image");
              $scope.secondcolumn =true;
              $scope.matchingimages[$scope.matcount]=$scope.displayimages[$scope.cellindex];
              $scope.remove=!$scope.remove;
              $scope.matcount=$scope.matcount+1; 
              $scope.won=true;
              btnSubmit.disabled = false;
              $scope.btntext="Restart The Game";
             
            }                                   


    console.log($scope.count);
    if($scope.count==3)
    { 
      $scope.count=$scope.count-2;
      console.log($scope.count);
     
      // console.log($scope.displayimages[$scope.index[i-2]]);
      // console.log($scope.displayimages[$scope.index[i-1]]);
      if($scope.displayimages[$scope.index[0]]==$scope.displayimages[$scope.index[1]])
      {
        console.log("Image Matches");
                       
        
        $scope.matchingimages[$scope.matcount]=$scope.displayimages[$scope.index[0]];  

        $scope.matcount=$scope.matcount+1;  
        if($scope.matcount<=3)
        {
          $scope.firstcolumn =true;  
        }
        else
        {
          $scope.secondcolumn =true;
        }

        $scope.parkingPositionOI[$scope.index[0]]=null;
        $scope.parkingPositionOI[$scope.index[1]]=null; 
        $scope.displayimages[$scope.index[0]]=null;
        $scope.displayimages[$scope.index[1]]=null;
        console.log("Display Images"+$scope.displayimages);
        console.log("Display Images"+$scope.displayimages[$scope.index[0]]);
        console.log("Display Images"+$scope.displayimages[$scope.index[1]]);
        console.log("Matching Images:",$scope.matchingimages);
        console.log("Matching Images:",$scope.matchingimages[0]);
        $scope.index=[];
        $scope.index[0]=$scope.cellindex;

              
      }
      else
      {
        
        $scope.parkingPositionOI[$scope.index[0]]=1;
        $scope.parkingPositionOI[$scope.index[1]]=1; 
        console.log("Display Images"+$scope.displayimages);
        console.log("Display Images"+$scope.displayimages[0]);
        console.log("Display Images"+$scope.displayimages[15]);
        console.log($scope.parkingPositionOI);
        $scope.index=[];
        $scope.index[0]=$scope.cellindex;
      }

    }
    
  }
else
  {
    if($scope.parkingPositionOI[i]!=2)
    {
      $scope.displayimages[i]=$scope.frontimage;
    }
  }
}


}
});