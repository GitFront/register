// 把用户操作抽取出来，以便复用
// 这里面提供三个方法：1、获取用户列表 2、判断用户是否已存在 3、添加新用户
app.factory('userSvic', [function(storage) {
    return {

        // 从localStorage中提取数据
        getUserList: function() {
            return JSON.parse(localStorage.getItem('userList')) || [];
        },

        // 遍历用户列表，与传过来的name比较判断,
        // 如果已注册，返回true，否则返回undefined
        isRegistered: function(name) {
            var userList = this.getUserList();
            for(var i = 0, len = userList.length; i < len; i++) {
                if(userList[i].name === name) {
                    return true;
                }
            }
        }, 

        // 把新的user对象添加到userList中，然后使用localStorage存储
        addUser: function(user) {
            var userList = this.getUserList();
            userList.push(user);
            localStorage.setItem('userList', JSON.stringify(userList));
        }

    };
}]);
