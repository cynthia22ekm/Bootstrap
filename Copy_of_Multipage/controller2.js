var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) 
{
$scope.match=false;

$scope.matcount=0;  
$scope.count=0;
$scope.firstcolumn=false;
$scope.secondcolumn=false;
$scope.display=true;
$scope.exceeded=false;
$scope.index=[];
console.log($scope.turned);
$scope.backimages=["image/rose1.jpg","image/rose2.jpg","image/rose3.jpg","image/rose4.jpg","image/rose5.jpg","image/rose6.jpg","image/rose7.jpg","image/rose8.jpg"];
$scope.pairimages=["image/rose1.jpg","image/rose2.jpg","image/rose3.jpg","image/rose4.jpg","image/rose5.jpg","image/rose6.jpg","image/rose7.jpg","image/rose8.jpg"];
$scope.frontimage="image/chessboard.png";
$scope.displayimages=[];
$scope.numArray=[];
$scope.matchingimages=[];
$scope.combinedimages=$scope.backimages.concat($scope.pairimages);
console.log($scope.combinedimages);
var range = [];
for(var i=0;i<4;i++) 
{
  range.push(i);
}
for(var k=0;k<16;k++) 
{
  $scope.numArray.push(1);
}
$scope.range = range;



$scope.distribute=function()
{
  $scope.going = !$scope.going;
  $scope.backdistribute=true;
  $scope.backimages.sort(() => Math.random() - 0.5);
  $scope.pairimages.sort(() => Math.random() - 0.5);
  $scope.combinedimages.sort(() => Math.random() - 0.5);
  console.log($scope.combinedimages);
  var btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.disabled = true;
    
}


$scope.frontturnover=function(column)
{

$scope.count++;
$scope.columnindex=column.$index;

$scope.rowindex=column.$parent.i;


$scope.cellindex=(4*($scope.rowindex)+($scope.columnindex));
console.log("cellindex"+$scope.cellindex);

for(i=0;i<16;i++)
{
  if(i==($scope.cellindex))
  {

    
    $scope.numArray[$scope.cellindex]=2; 
    $scope.displayimages[$scope.cellindex]=$scope.combinedimages[$scope.cellindex];
    // console.log($scope.displayimages);
    
    $scope.index.push($scope.cellindex);
    console.log("index array"+$scope.index);
    console.log("Num array"+$scope.numArray);

    console.log($scope.matcount);     
    if(($scope.matcount==7) && ($scope.count==2))
            {
              console.log("Push the last image");
              $scope.secondcolumn =true;
              $scope.matchingimages[$scope.matcount]=$scope.displayimages[$scope.cellindex];
              $scope.remove=!$scope.remove;
            }                                  

    if($scope.count==2)                                          //added here
    {
      
      if($scope.displayimages[$scope.index[0]]==$scope.displayimages[$scope.index[1]])
      {
        $scope.count=$scope.count-2;
        console.log("Image Matches");
        // $scope.remove=!$scope.remove;
                  //modie]fied
        
        // $scope.match=true;                       
        
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

        $scope.ifMatching();
       
      }
      else{

     
        // $scope.match=false;                  
        $scope.numArray[$scope.index[0]]=2;
        $scope.numArray[$scope.index[1]]=2; 
        // $scope.displayimages[$scope.index[0]]=$scope.frontimage;
        // $scope.displayimages[$scope.index[1]]=$scope.frontimage;
        console.log("Display Images"+$scope.displayimages);
        console.log("Display Images"+$scope.displayimages[0]);
        console.log("Display Images"+$scope.displayimages[15]);
        console.log($scope.numArray);
       
       
     
    }
          }
    


                                                                    //ended here
    console.log($scope.count);
    $scope.checkcount();
    
  }

else
  {
    if($scope.numArray[i]!=2)
    {
      $scope.displayimages[i]=$scope.frontimage;
    }
  }
}

}

$scope.checkcount=function()
{

  if($scope.count==3)
    { 
      $scope.count=$scope.count-2;
      console.log($scope.count);
     
      // console.log($scope.displayimages[$scope.index[i-2]]);
      // console.log($scope.displayimages[$scope.index[i-1]]);
      if($scope.displayimages[$scope.index[0]]==$scope.displayimages[$scope.index[1]])
      {
        console.log("Image Matches");
        // $scope.remove=!$scope.remove;
                  //modie]fied
        
        // $scope.match=true;         //mofied 19/04                
        
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

        $scope.ifMatching();
        $scope.index[0]=$scope.cellindex;

              
      }
      else
      {
        // $scope.match=false;                  
        $scope.numArray[$scope.index[0]]=1;
        $scope.numArray[$scope.index[1]]=1; 
        // $scope.displayimages[$scope.index[0]]=$scope.frontimage;
        // $scope.displayimages[$scope.index[1]]=$scope.frontimage;
        console.log("Display Images"+$scope.displayimages);
        console.log("Display Images"+$scope.displayimages[0]);
        console.log("Display Images"+$scope.displayimages[15]);
        console.log($scope.numArray);
        $scope.index=[];
        $scope.index[0]=$scope.cellindex;
      }

    }
}

$scope.ifMatching=function()
{
  $scope.numArray[$scope.index[0]]=null;
  $scope.numArray[$scope.index[1]]=null; 
  $scope.displayimages[$scope.index[0]]=null;
  $scope.displayimages[$scope.index[1]]=null;
  console.log("Display Images"+$scope.displayimages);
  console.log("Display Images"+$scope.displayimages[$scope.index[0]]);
  console.log("Display Images"+$scope.displayimages[$scope.index[1]]);
  console.log("Matching Images:",$scope.matchingimages);
  console.log("Matching Images:",$scope.matchingimages[0]);
  $scope.index=[];
  


}
});

