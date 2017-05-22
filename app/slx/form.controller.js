var app = angular.module('sequentialConfiguration', ['ngSanitize', 'schemaForm']);

app.controller('FormController', function ($scope) {

    $scope.schema = {
        "type": "object",
        "properties": {
            "target": {
                title: "Target",
                "type": "string"
            },
            "platform": {
                "type": "string",
                title: "Platform",
                "enum": [
                    "/home/user/silexica/platforms/platform_descriptions/exynos.platform",
                    "/home/user/silexica/platforms/platform_descriptions/parallela.platform",
                    "/home/user/silexica/platforms/platform_descriptions/nxp_t4240.platform",
                ]
            },
            "findDLP": {
                "type": "boolean",
                title: "Find Data-level Parallelism",
                "default": true
            },
            "findTLP": {
                "type": "boolean",
                title: "Find Task-level Parallelism",
                "default": true
            },
            "findPLP": {
                "type": "boolean",
                "default": true,
                title: "Find Pipeline-level Parallelism",
            },
            "findOffloading": {
                "type": "boolean",
                title: "Find Offloading",
            },
            "includeDirectory": {
                "type": "string",
                title: "Include Directory",
            },
            "sourceDirectory": {
                "type": "string",
                title: "Source Directory",
            },
            "source": {
                "type": "string",
                title: "Source",
            },
            "CXXFLAGS": {
                "type": "string",
                title: "CXXFLAGS",
            },
            "GLFLAGS": {
                "type": "string",
                title: "GLFLAGS",
            },
            "LDFLAGS": {
                "type": "string",
                title: "LDFLAGS",
            },
            "LDLIBS": {
                "type": "string",
                title: "LDLIBS",
            },
            "dataModel": {
                "type": "string",
                title: "Data Model",
                "default": "portable",
                "enum": [
                    "portable",
                    "mix64",
                    "posix32",
                    "posix64",
                    "win32",
                    "win64"
                ]
            },
            "commandLineOptions": {
                "type": "string",
                title: "Command Line Options",
            },
            "excludeSourceFiles": {
                "type": "string",
                title: "Excluded Source Files",
            },
            "allowNonZeroExit": {
                "type": "boolean",
                title: "Allow Non-zero Exit",
            },
            "optimisticAnalysis": {
                "type": "boolean",
                title: "Optimistic Analysis",
            },
            "candidateThreshold": {
                "type": "integer",
                title: "Candidate Threshold",
                "default": 50,
                "maximum": 100,
                "minimum": 0
            },
            "filterRatio": {
                "type": "number",
                title: "Filter Ratio",
                "default": 0.1,
                "maximum": 1.0,
                "minimum": 0.0
            },
            "functions": {
                "type": "string",
                title: "Functions",
            },
            "functionExcludes": {
                "type": "string",
                title: "Function Excludes",
            },
            "cacheAnalysis": {
                "type": "boolean"
            },
            "processor": {
                title: "CA Processor",
                "type": "string",
            },
            "advanceTrace": {
                "type": "boolean"
            },
            "userClean": {
                "type": "string"
            },
            "userBuildAndRun": {
                "type": "string"
            },
            "rdgTaskVisualFormat": {
                "type": "string"
            },
            "rdgARXML": {
                "type": "string"
            },
            "rdgRunnableScheduler": {
                "type": "string"
            },
            "rdgSuperTaskCreation": {
                "type": "string"
            },
            "rdgWCETTable": {
                "type": "string"
            },
            "rdgReplaceWCET": {
                "type": "boolean"
            },
            "buildtype": {
                "type": "string",
                "enum": [
                    "slxproject",
                    "userproject"
                ],
                "default": "slxproject"
            },
            "isAutomotiveProject": {
                "type": "boolean",
                "default": false
            }
        },
        'required': ['target', 'platform', 'dataModel', 'filterRatio', 'candidateThreshold'],
        "additionalProperties": false
    };


    $scope.form = [

        {
            type: "tabs",
            tabs: [{
                title: "Basic Options",
                items: [{
                    key: "target",
                    readonly: true,

                }, {
                    key: "platform",
                    "placeholder": "None selected here neither.",
                    type: "select",
                    "titleMap": [{
                        "value": '/home/user/silexica/platforms/platform_descriptions/exynos.platform',
                        "name": 'Exynos'
                    }, {
                        "value": '/home/user/silexica/platforms/platform_descriptions/parallela.platform',
                        "name": 'Parallela'
                    }, {
                        "value": '/home/user/silexica/platforms/platform_descriptions/nxp_t4240.platform',
                        "name": 'NXP T4240'
                    }]
                    // onChange: "updated(modelValue,form)"
                }, {
                    key: "findDLP",
                }, {
                    key: "findTLP",
                }, {
                    key: "findPLP",
                }, {
                    key: "findOffloading",
                }]
            }, {
                title: "Build Options",
                items: [{
                    type: "radiobuttons",
                    key: "buildtype",
                    title: "Build Model",
                    style: {
                        selected: "btn-success",
                        unselected: "btn-default"
                    },
                    titleMap: [{
                        value: "slxproject",
                        name: "Silexica"
                    }, {
                        value: "userproject",
                        name: "User Defined"
                    }]
                }, {
                    key: "userClean",
                    title: "User Clean",
                    "condition": "model.buildtype=='userproject'",
                    "placeholder": "Select a user clean script"
                }, {
                    key: "userBuildAndRun",
                    title: "User Build and Run",
                    "condition": "model.buildtype=='userproject'",
                    "placeholder": "Select a user build and run script"
                }, {
                    key: "includeDirectory",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Directory for te application header files"
                }, {
                    key: "sourceDirectory",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Directory for the application source code"
                }, {
                    key: "source",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "List of the source code files of the application"
                }, {
                    key: "CXXFLAGS",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "C/C++ Compiler Flags"
                }, {
                    key: "GLFLAGS",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Common flags"
                }, {
                    key: "LDFLAGS",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Linker-specific options"
                }, {
                    key: "LDLIBS",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Specify libraries to link with"
                }, {
                    key: "dataModel",

                    "condition": "model.buildtype=='slxproject'",
                }, {
                    key: "commandLineOptions",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "Arguments to pass to the application"
                }, {
                    key: "excludeSourceFiles",

                    "condition": "model.buildtype=='slxproject'",
                    "placeholder": "List of the source code files to be ignored"
                }, {
                    key: "allowNonZeroExit",

                    "condition": "model.buildtype=='slxproject'",
                }]
            }, {
                title: "Advanced Options",
                items: [{
                    key: "optimisticAnalysis",

                }, {
                    key: "candidateThreshold",

                }, {
                    key: "filterRatio",

                }, {
                    key: "functions",

                    "placeholder": "Comma separated function names"
                }, {
                    key: "functionExcludes",

                    "placeholder": "Comma separated function names"
                }, {
                    key: "processor",
                    "type": "select",
                    "placeholder": "not set yet..",
                    "options": {
                        "callback": $scope.callBackSD
                    }

                }]
            }]
        },
        {
            type: "submit",
            title: "Save"
        }


    ];


    // $scope.form = [
    // {
    //   key: "name",
    //   feedback: "{ 'glyphicon': true, 'glyphicon-asterisk': form.required,'glyphicon-ok': hasSuccess(), 'glyphicon-remove': hasError() }"
    // }
    // ];

    $scope.model = {
        target: "TESTXLP",
        buildtype: "slxproject"

    };

    $scope.$watch('model', function () {
        console.log("Model Updated!");
    }, true);

    $scope.onSubmit = function (form) {
        // First we broadcast an event so all fields validate themselves
        $scope.$broadcast('schemaFormValidate');

        console.log($scope.model);
        // Then we check if the form is valid
        // if (form.$valid) {
        //     // ... do whatever you need to do with your data.
        // }
    }
});