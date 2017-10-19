
angular.module('todoApp', [])
    .controller('todoCtrl', [
    '$scope',
    function($scope){
        
        $scope.monTodos = [
            {text:'say hello', done:false}
        ];

        $scope.tueTodos = [
            
        ];

        $scope.wedTodos = [
            
        ];

        $scope.thuTodos = [
            
        ];

        $scope.friTodos = [
            
        ];

        $scope.satTodos = [
            
        ];

        $scope.sunTodos = [
            
        ];


        $scope.monAddTodo = function() {
            $scope.monTodos.push({text:$scope.monTodoText, done:false});
            $scope.monTodoText='';
        };

        $scope.tueAddTodo = function() {
            $scope.tueTodos.push({text:$scope.tueTodoText, done:false});
            $scope.tueTodoText='';
        };

        $scope.wedAddTodo = function() {
            $scope.wedTodos.push({text:$scope.wedTodoText, done:false});
            $scope.wedTodoText='';
        };
        
        $scope.thuAddTodo = function() {
            $scope.thuTodos.push({text:$scope.thuTodoText, done:false});
            $scope.thuTodoText='';
        };

        $scope.friAddTodo = function() {
            $scope.friTodos.push({text:$scope.friTodoText, done:false});
            $scope.friTodoText='';
        };

        $scope.satAddTodo = function() {
            $scope.satTodos.push({text:$scope.satTodoText, done:false});
            $scope.satTodoText='';
        };

        $scope.sunAddTodo = function() {
            $scope.sunTodos.push({text:$scope.sunTodoText, done:false});
            $scope.sunTodoText='';
        };
    }
]);



