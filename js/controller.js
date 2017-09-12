app.controller('appCtrl', ['$scope', 'userSvic', function($scope, userSvic) {
    
      $scope.user = {
        name: '',
        pwd: '',
        repeat_pwd: '',
        isAgree: false,
        msg: ''
      };
    
      
      $scope.sub = function() {
    
        if($scope.user.name.trim() === '') {
          $scope.user.msg = '请输入用户名!';
          return;
        }
    
        if($scope.user.pwd.trim() === '') {
          $scope.user.msg = '请输入密码!';
          return;
        }
    
        if($scope.user.pwd.trim() !== $scope.user.repeat_pwd.trim()) {
          $scope.user.msg = '两次密码不一致!';
          return;
        }
    
        if(!$scope.user.isAgree) {
          $scope.user.msg = '请先阅读并同意协议!';
          return;
        }

        // 封装好的服务有一个专门判断用户是否注册的方法，拿来用即可
        if(userSvic.isRegistered($scope.user.name)) {
          $scope.user.msg = '用户名已注册!'
        }else {
          userSvic.addUser({ name: $scope.user.name, pwd: $scope.user.pwd });
          $scope.user.msg = '注册成功!'
        }
        
      };
    }]);