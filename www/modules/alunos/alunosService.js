'use strict';

(function() {

	/**
	* @ngdoc function
	* @name app.service:indexService
	* @description
	* # indexService
	* Service of the app
	*/
 angular.module('app')
 .factory('alunosService', service)

	service.$inject = ['$http'];

	function service($http) {

		var list = [
                    {"cod": 0, "nome": "Heitor", "avatar": "kid-1", "avatar_bg" : "green"},	
                    {"cod": 1, "nome": "Heloisa", "avatar": "kid-2", "avatar_bg" : "mauve"},	
                    {"cod": 2, "nome": "Tomaz", "avatar": "kid-3", "avatar_bg" : "orange"},	
                    {"cod": 3, "nome": "Sofia", "avatar": "kid-4", "avatar_bg" : "red"}	
//                    {"nome": "Filho 5", "avatar": "kid-5", "avatar_bg" : "crimson"},	
//                    {"nome": "Filho 6", "avatar": "kid-6", "avatar_bg" : "violet"},	
//                    {"nome": "Filho 7", "avatar": "kid-7", "avatar_bg" : "cobalt"},
//                    {"nome": "Filho 8", "avatar": "kid-8", "avatar_bg" : "emerald"}
		];
                
                var avatars = [
                    'kid-1',
                    'kid-2',
                    'kid-3',
                    'kid-4',
                    'kid-5',
                    'kid-6',
                    'kid-7',
                    'kid-8'
                ];
                
                var colors = [
                    'lime',
                    'green',
                    'emerald',
                    'teal',
                    'cyan',
                    'cobalt',
                    'indigo',
                    'violet',
                    'pink',
                    'magenta',
                    'crimson',
                    'red',
                    'orange',
                    'amber',
                    'yellow',
                    'brown',
                    'olive',
                    'steel',
                    'mauve',
                    'taupe'
                ];

		return {
                        get: get,
			getList: getList,
                        getAvatars: getAvatars,
                        getAvatarsColors: getAvatarsColors
		};
                
                function get (params) {
                    return list[params.id];
                }

		function getList() {
                    return list
		}
                
                function getAvatars (params) {
                    var tmpAvatars = [];
                    
                    if (params.pageLength != undefined) {
                        var p = 0;
                        var j = 0
                        for (var i=0,p=0,j=0 ; i < avatars.length; i++) { 
                            
                            if (!tmpAvatars[p]) tmpAvatars[p] = []
                            
                            tmpAvatars[p][j] = avatars[i];
                            j++;
                            
                            if (j >= params.pageLength) {
                                j = 0;
                                p++;
                            }
                        }
                    } else {
                        tmpColor = vm.avatars;
                    }
                    
                    return tmpAvatars;
                }
                
                function getAvatarsColors (params) {
                    
                    var tmpColor = [];
                    
                    if (params.pageLength != undefined) {
                        var p = 0;
                        var j = 0
                        for (var i=0,p=0,j=0 ; i < colors.length; i++) { 
                            
                            if (!tmpColor[p]) tmpColor[p] = []
                            
                            tmpColor[p][j] = colors[i];
                            j++;
                            
                            if (j >= params.pageLength) {
                                j = 0;
                                p++;
                            }
                        }
                    } else {
                        tmpColor = vm.colors;
                    }
                    
                    return tmpColor;
                }
	}

})();
