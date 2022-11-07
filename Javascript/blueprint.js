$(() => {
    const treeView = $('#treeview').dxTreeView({
        items: products,
        width: 500,
        searchEnabled: true,
        selectionMode: 'single',
		selectByClick: true,
		onItemSelectionChanged: function(e){
			const selected = e.itemData;
			const saveSelection = document.getElementById("task_blueprint_text");
			saveSelection.value = e.itemData.id;
		},
    }).dxTreeView('instance');

    $("#treeview").dxTreeView("collapseAll");

    $('#searchMode').dxSelectBox({
        items: ['contains', 'startswith', 'equals'],
        value: 'contains',
        onValueChanged(data) {
            treeView.option('searchMode', data.value);
        },
    });
});


const products = [{
    id: "O1 Blueprint (combined, restructured)",
    text: "O1 Blueprint (combined, restructured)",
    expanded: true,
    items: [{
            id: "expressions",
            text: "expressions",
            expanded: true,
            items: [{
                    id: "operators",
                    text: "operators",
                    expanded: true,
                    items: [{
                            id: "relational operators",
                            text: "relational operators",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "logical operators",
                            text: "logical operators",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "arithmetic operators",
                            text: "arithmetic operators",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "bit operators",
                            text: "bit operators",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "evaluation",
                    text: "evaluation",
                    expanded: true,
                    items: [{
                            id: "precedence",
                            text: "precedence",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "lazy evaluation",
                            text: "lazy evaluation",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "control flow",
            text: "control flow",
            expanded: true,
            items: [{
                    id: "conditionals",
                    text: "conditionals",
                    expanded: true,
                    items: [{
                            id: "switch",
                            text: "switch",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "if",
                            text: "if",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "loops",
                    text: "loops",
                    expanded: true,
                    items: [{
                            id: "for",
                            text: "for",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "while",
                            text: "while",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "foreach",
                            text: "foreach",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "exceptions",
                    text: "exceptions",
                    expanded: true,
                    items: []
                },
                {
                    id: "jumping",
                    text: "jumping",
                    expanded: true,
                    items: [{
                            id: "break",
                            text: "break",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "continue",
                            text: "continue",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "data",
            text: "data",
            expanded: true,
            items: [{
                    id: "user-defined structures",
                    text: "user-defined structures",
                    expanded: true,
                    items: [{
                            id: "trees",
                            text: "trees",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "stacks",
                            text: "stacks",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "queues",
                            text: "queues",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "graphs",
                            text: "graphs",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "type conversion",
                    text: "type conversion",
                    expanded: true,
                    items: [{
                            id: "coercion",
                            text: "coercion",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "casting",
                            text: "casting",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "types (built-in)",
                    text: "types (built-in)",
                    expanded: true,
                    items: [{
                            id: "primitive",
                            text: "primitive",
                            expanded: true,
                            items: [{
                                    id: "char",
                                    text: "char",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "boolean",
                                    text: "boolean",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "numeric",
                                    text: "numeric",
                                    expanded: true,
                                    items: [{
                                            id: "int",
                                            text: "int",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "float",
                                            text: "float",
                                            expanded: true,
                                            items: []
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id: "composite",
                            text: "composite",
                            expanded: true,
                            items: [{
                                    id: "dictionaries",
                                    text: "dictionaries",
                                    expanded: true,
                                    items: [{
                                        id: "map",
                                        text: "map",
                                        expanded: true,
                                        items: []
                                    }, ]
                                },
                                {
                                    id: "sets",
                                    text: "sets",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "sequences",
                                    text: "sequences",
                                    expanded: true,
                                    items: [{
                                            id: "lists",
                                            text: "lists",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "strings",
                                            text: "strings",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "tuples",
                                            text: "tuples",
                                            expanded: true,
                                            items: []
                                        },
                                    ]
                                },
                                {
                                    id: "array",
                                    text: "array",
                                    expanded: true,
                                    items: []
                                },
                            ]
                        },
                    ]
                },
            ]
        },
        {
            id: "imperative programming",
            text: "imperative programming",
            expanded: true,
            items: [{
                    id: "functions",
                    text: "functions",
                    expanded: true,
                    items: [{
                            id: "signature",
                            text: "signature",
                            expanded: true,
                            items: [{
                                    id: "arguments/parameters",
                                    text: "arguments/parameters",
                                    expanded: true,
                                    items: [{
                                            id: "positional",
                                            text: "positional",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "keyword (kwargs)",
                                            text: "keyword (kwargs)",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "default values",
                                            text: "default values",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "arbitrary number of arguments",
                                            text: "arbitrary number of arguments",
                                            expanded: true,
                                            items: [{
                                                    id: "*args",
                                                    text: "*args",
                                                    expanded: true,
                                                    items: []
                                                },
                                                {
                                                    id: "**kwargs",
                                                    text: "**kwargs",
                                                    expanded: true,
                                                    items: []
                                                },
                                                {
                                                    id: "...",
                                                    text: "...",
                                                    expanded: true,
                                                    items: []
                                                },
                                            ]
                                        },
                                    ]
                                },
                                {
                                    id: "return type",
                                    text: "return type",
                                    expanded: true,
                                    items: []
                                },
                            ]
                        },
                        {
                            id: "calling functions",
                            text: "calling functions",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "return",
                            text: "return",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "anonymous function",
                            text: "anonymous function",
                            expanded: true,
                            items: [{
                                id: "lambda",
                                text: "lambda",
                                expanded: true,
                                items: [{
                                        id: "functional interfaces",
                                        text: "functional interfaces",
                                        expanded: true,
                                        items: []
                                    },
                                    {
                                        id: "method references",
                                        text: "method references",
                                        expanded: true,
                                        items: []
                                    },
                                ]
                            }, ]
                        },
                        {
                            id: "algorithms",
                            text: "algorithms",
                            expanded: true,
                            items: [{
                                    id: "algorithm specifications",
                                    text: "algorithm specifications",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "correctness",
                                    text: "correctness",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "recursion",
                                    text: "recursion",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "non-functional properties",
                                    text: "non-functional properties",
                                    expanded: true,
                                    items: [{
                                            id: "computational complexity",
                                            text: "computational complexity",
                                            expanded: true,
                                            items: []
                                        },
                                        {
                                            id: "termination",
                                            text: "termination",
                                            expanded: true,
                                            items: []
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            id: "creating/defining",
                            text: "creating/defining",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "variables",
                    text: "variables",
                    expanded: true,
                    items: [{
                            id: "constants",
                            text: "constants",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "scope",
                            text: "scope",
                            expanded: true,
                            items: [{
                                    id: "global variables",
                                    text: "global variables",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "local variables",
                                    text: "local variables",
                                    expanded: true,
                                    items: []
                                },
                            ]
                        },
                        {
                            id: "assignment",
                            text: "assignment",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "variable declaration",
                            text: "variable declaration",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "multi-threading",
            text: "multi-threading",
            expanded: true,
            items: [{
                id: "synchronization",
                text: "synchronization",
                expanded: true,
                items: []
            }, ]
        },
        {
            id: "Design principles",
            text: "Design principles",
            expanded: true,
            items: [{
                    id: "top-down",
                    text: "top-down",
                    expanded: true,
                    items: []
                },
                {
                    id: "bottom-up",
                    text: "bottom-up",
                    expanded: true,
                    items: []
                },
            ]
        },
        {
            id: "IO",
            text: "IO",
            expanded: true,
            items: [{
                    id: "files",
                    text: "files",
                    expanded: true,
                    items: [{
                            id: "text",
                            text: "text",
                            expanded: true,
                            items: [{
                                    id: "plain",
                                    text: "plain",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "JSON",
                                    text: "JSON",
                                    expanded: true,
                                    items: []
                                },
                            ]
                        },
                        {
                            id: "binary",
                            text: "binary",
                            expanded: true,
                            items: [{
                                id: "excel",
                                text: "excel",
                                expanded: true,
                                items: []
                            }, ]
                        },
                    ]
                },
                {
                    id: "standard",
                    text: "standard",
                    expanded: true,
                    items: [{
                            id: "input",
                            text: "input",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "print",
                            text: "print",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "object orientation (OO)",
            text: "object orientation (OO)",
            expanded: true,
            items: [{
                    id: "objects",
                    text: "objects",
                    expanded: true,
                    items: [{
                            id: "instantiation",
                            text: "instantiation",
                            expanded: true,
                            items: [{
                                id: "cloning",
                                text: "cloning",
                                expanded: true,
                                items: []
                            }, ]
                        },
                        {
                            id: "garbage collection",
                            text: "garbage collection",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "referencing",
                            text: "referencing",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "Access modifiers",
                    text: "Access modifiers",
                    expanded: true,
                    items: [{
                            id: "public",
                            text: "public",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "protected",
                            text: "protected",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "private",
                            text: "private",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "package private",
                            text: "package private",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "Inheritance",
                    text: "Inheritance",
                    expanded: true,
                    items: [{
                            id: "overriding",
                            text: "overriding",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "duck typing (polymorphism)",
                            text: "duck typing (polymorphism)",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "extension",
                            text: "extension",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "class inheritance",
                            text: "class inheritance",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "interface inheritance",
                            text: "interface inheritance",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "abstract classes",
                            text: "abstract classes",
                            expanded: true,
                            items: [{
                                id: "abstract methods",
                                text: "abstract methods",
                                expanded: true,
                                items: []
                            }, ]
                        },
                    ]
                },
                {
                    id: "Interfaces",
                    text: "Interfaces",
                    expanded: true,
                    items: [{
                            id: "interface methods",
                            text: "interface methods",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "default methods",
                            text: "default methods",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "interface constants",
                            text: "interface constants",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "Classes",
                    text: "Classes",
                    expanded: true,
                    items: [{
                            id: "methods",
                            text: "methods",
                            expanded: true,
                            items: [{
                                    id: "static methods",
                                    text: "static methods",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "instance methods",
                                    text: "instance methods",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "final methods",
                                    text: "final methods",
                                    expanded: true,
                                    items: []
                                },
                                {
                                    id: "overloading",
                                    text: "overloading",
                                    expanded: true,
                                    items: []
                                },
                            ]
                        },
                        {
                            id: "fields",
                            text: "fields",
                            expanded: true,
                            items: [{
                                id: "final fields",
                                text: "final fields",
                                expanded: true,
                                items: []
                            }, ]
                        },
                        {
                            id: "final class",
                            text: "final class",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "constructors",
                            text: "constructors",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "testing",
            text: "testing",
            expanded: true,
            items: [{
                    id: "unit tests",
                    text: "unit tests",
                    expanded: true,
                    items: [{
                            id: "unit tests manual",
                            text: "unit tests manual",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "unit tests automated",
                            text: "unit tests automated",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "integration tests",
                    text: "integration tests",
                    expanded: true,
                    items: []
                },
            ]
        },
        {
            id: "coding conventions",
            text: "coding conventions",
            expanded: true,
            items: [{
                    id: "naming conventions",
                    text: "naming conventions",
                    expanded: true,
                    items: [{
                            id: "PEP 8",
                            text: "PEP 8",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "Java Code Conventions",
                            text: "Java Code Conventions",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "comments",
                    text: "comments",
                    expanded: true,
                    items: []
                },
                {
                    id: "documentation",
                    text: "documentation",
                    expanded: true,
                    items: [{
                            id: "JavaDoc",
                            text: "JavaDoc",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "Docstring",
                            text: "Docstring",
                            expanded: true,
                            items: []
                        },
                    ]
                },
            ]
        },
        {
            id: "environment",
            text: "environment",
            expanded: true,
            items: [{
                    id: "IDE",
                    text: "IDE",
                    expanded: true,
                    items: [{
                            id: "debugging",
                            text: "debugging",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "editor",
                            text: "editor",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "compiler",
                            text: "compiler",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "version control",
                    text: "version control",
                    expanded: true,
                    items: [{
                        id: "git",
                        text: "git",
                        expanded: true,
                        items: []
                    }, ]
                },
                {
                    id: "build management tools",
                    text: "build management tools",
                    expanded: true,
                    items: [{
                            id: "maven",
                            text: "maven",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "pip",
                            text: "pip",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "gradle",
                            text: "gradle",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "libraries",
                    text: "libraries",
                    expanded: true,
                    items: [{
                            id: "guizero",
                            text: "guizero",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "numpy",
                            text: "numpy",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "random",
                            text: "random",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "pandas",
                            text: "pandas",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "java.util.stream",
                            text: "java.util.stream",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "testing frameworks",
                    text: "testing frameworks",
                    expanded: true,
                    items: [{
                            id: "JUnit",
                            text: "JUnit",
                            expanded: true,
                            items: []
                        },
                        {
                            id: "pytest",
                            text: "pytest",
                            expanded: true,
                            items: []
                        },
                    ]
                },
                {
                    id: "packaging",
                    text: "packaging",
                    expanded: true,
                    items: [{
                        id: "JAR-files",
                        text: "JAR-files",
                        expanded: true,
                        items: []
                    }, ]
                },
            ]
        },
    ]
}, ];