const FEATURES = JSON.parse(
`[
   {
      "name":"Modularity",
      "key":"modularity",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Spaghetti code",
            "desc_long":"The project contains spaghetti code, e.g. it lacks a clear organization."
         },
         {
            "key":"2",
            "desc":"Unrelated tasks in functions",
            "desc_long":"Most of the classes and functions perform many unrelated tasks and/or their bodies are large."
         },
         {
            "key":"3",
            "desc":"High degree of coupling",
            "desc_long":"The degree of coupling is high, e.g. one object depends on each of the other objects."
         }],"pass_examples":[
         {
            "key":"1",
            "desc":"Clear structure",
            "desc_long":"Project structure is clear since the code is organized in coherent packages, folders, files, etc."
         },
         {
            "key":"2",
            "desc":"Limited scope of classes and functions",
            "desc_long":"Most of the classes and functions perform a limited set of tasks and their bodies are limited in length."
         }
      ]
   },
   {
      "name":"Data Types",
      "key":"data_types",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Wrong Datatypes",
            "desc_long":"The choice of some data types is wrong, e.g. an integer is used when a boolean is enough."
         },
         {
            "key":"2",
            "desc":"Too complex data structures",
            "desc_long":"Complex data structures are used when are not needed, e.g. primitive-data array vs Object-data array."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Variables and attributes",
            "desc_long":"Appropriate data type selection for variables and attributes."
         },
         {
            "key":"2",
            "desc":"Function/Method return",
            "desc_long":"Appropriate data type selection for function/method return."
         }
      ]
   },
   {
      "name":"Readability",
      "key":"readability",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Wrong formatting",
            "desc_long":"Formatting is usually missing, poor or it is used wrongly."
         },
         {
            "key":"2",
            "desc":"Bad layout",
            "desc_long":"The layout of the code is not easy to read."
         },
         {
            "key":"3",
            "desc":"Poor naming",
            "desc_long":"Some names appear unreadable, meaningless, misleading and/or do not meet naming conventions."
         },
         {
            "key":"4",
            "desc":"Bad comments",
            "desc_long":"Comments are generally missing or explain obvious issues, such as what the code statement is doing."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Well formated code",
            "desc_long":"Indentation, line breaks, spacing and brackets fully clarify program structure."
         },
         {
            "key":"2",
            "desc":"Good names",
            "desc_long":"Meaningful identifiers which meet naming conventions are used as variables, functions and class names."
         },
         {
            "key":"3",
            "desc":"Comments explain decisions",
            "desc_long":"Comments do not explain what the code is doing, instead explain tricky or important decisions."
         },
         {
            "key":"4",
            "desc":"Comments enhance understanding",
            "desc_long":"Comments are present where strictly needed and enhance understanding of the code."
         }
      ]
   },
   {
      "name":"DRY principle",
      "key":"dry_principle",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Repeated code",
            "desc_long":"Repeat snippets of code quite often."
         },
         {
            "key":"2",
            "desc":"Magic numbers",
            "desc_long":"Use magic (hard-coding) numbers or string literals."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Helper functions are used",
            "desc_long":"Helper functions are used in order to reuse code."
         },
         {
            "key":"2",
            "desc":"Use of constants",
            "desc_long":"Constants are used and they are kept in a common place."
         }
      ]
   },
   {
      "name":"Flow",
      "key":"programme_flow",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Spaghetti code",
            "desc_long":"The project contains spaghetti code, e.g. it lacks a clear organization."
         },
         {
            "key":"2",
            "desc":"Unrelated tasks in functions",
            "desc_long":"Most of the classes and functions perform many unrelated tasks and/or their bodies are large."
         },
         {
            "key":"3",
            "desc":"High degree of coupling",
            "desc_long":"The degree of coupling is high, e.g. one object depends on each of the other objects."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Simple flow",
            "desc_long":"Flow is simple so that the most common path through the code is clearly visible."
         },
         {
            "key":"2",
            "desc":"Traceability",
            "desc_long":"Traceability: it is easy to verify know which code line corresponds to which program requirement/s."
         }
      ]
   },
   {
      "name":"API Documentation",
      "key":"api_documentation",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Missing information",
            "desc_long":"Information is generally missing, redundant, incomplete or misspelled at the top of the file."
         },
         {
            "key":"2",
            "desc":"Authors are not documented",
            "desc_long":"Documentation about the author is missing."
         },
         {
            "key":"3",
            "desc":"Classes are not documented",
            "desc_long":"Documentation about the class/module is missing or incomplete."
         },
         {
            "key":"4",
            "desc":"Fields are not documented",
            "desc_long":"Documentation about the fields is missing or incomplete."
         },
         {
            "key":"5",
            "desc":"Methods are not documented",
            "desc_long":"Documentation about the methods is missing or incomplete."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Authors are documented",
            "desc_long":"At the top of the file, there is a block comment in which the programmer provides author’s names."
         },
         {
            "key":"2",
            "desc":"Version and goal are documented",
            "desc_long":"The summary of the goal of the file and its version."
         },
         {
            "key":"3",
            "desc":"Attributes documented",
            "desc_long":"Documentation about attributes is correct."
         },
         {
            "key":"4",
            "desc":"Methods documented",
            "desc_long":"Documentation about methods is correct."
         },
         {
            "key":"5",
            "desc":"Information is given",
            "desc_long":"Information is generally present and provides a brief description."
         },
         {
            "key":"6",
            "desc":"Conditions are documented",
            "desc_long":"It contains pre and post conditions."
         },
         {
            "key":"7",
            "desc":"Parameters are documented",
            "desc_long":"The meaning/role of each parameter is clear."
         }
      ]
   },
   {
      "name":"Correctness",
      "key":"correctness",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Not compiling",
            "desc_long":"The code does not compile and run cleanly."
         },
         {
            "key":"2",
            "desc":"Specifications not met",
            "desc_long":"The program does not meet some of the specifications."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Functions properly",
            "desc_long":"Program conforms to the specifications provided by the assignment."
         },
         {
            "key":"2",
            "desc":"Correct results",
            "desc_long":"It produces correct results for correct inputs."
         }
      ]
   },
   {
      "name":"Robustness",
      "key":"robustness",
      "fail_examples":[
         {
            "key":"1",
            "desc":"No error handling",
            "desc_long":"Errors or abnormal conditions are not all handled."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Errors handled properly",
            "desc_long":"The program reacts properly to abnormal conditions and erroneous inputs."
         }
      ]
   },
   {
      "name":"Traceability",
      "key":"traceability",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Tests not verifiable",
            "desc_long":"It is hard to verify that the tests cover all the program requirements/specification."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Clear tests",
            "desc_long":"Tests are clear so that it is easy to detect if any requirement is left out of the tests."
         },
         {
            "key":"2",
            "desc":"Tests understandable",
            "desc_long":"It is easy to know what requirements are evaluated by each test case/suite."
         }
      ]
   },
   {
      "name":"Test Completeness",
      "key":"test_completeness",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Not thoroughly tested",
            "desc_long":"Some specification/requirement is not thoroughly tested, e.g. a test case checks correct input but it does not check the behavior of the program with anomalous/exceptional inputs."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Enough tests",
            "desc_long":"For each specification/requirement that a test suite covers, there are enough tests cases to validate it."
         }
      ]
   },
   {
      "name":"PG - Extern - Analysis",
      "key":"pg_external_analysis",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Definitions and signatures",
            "desc_long":"Being able to answer questions about the analysis considerations in terms of context description/examples of I/O, definitions, description and parameter and return types."
         },
         {
            "key":"2",
            "desc":"Understanding requirements",
            "desc_long":"Understanding a description in natural language of the program requirements."
         },
         {
            "key":"3",
            "desc":"Analysis considerations.",
            "desc_long":"If asked for: describing the analysis considerations."
         }
      ]
   },
   {
      "name":"PG - Extern - Design",
      "key":"pg_external_design",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Suitable entities and types.",
            "desc_long":"Proposing suitable classes, methods, parameter and return types for the API."
         }
      ]
   },
   {
      "name":"PG - Extern - Specification",
      "key":"pg_external_specification",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Informal pre- and postconditions",
            "desc_long":"Giving informal preconditions and postconditions for the methods in the API in terms of the application domain."
         },
         {
            "key":"2",
            "desc":"Specification for robustness",
            "desc_long":"Providing robustness by specifying the desired behavior in case satisfying the postcondition is not possible (e.g. throwing exceptions, asking for user input, using default values)."
         },
         {
            "key":"3",
            "desc":"Well-named subspecifications",
            "desc_long":"Organizing the case analysis in the specification into well-named subspecifications."
         },
         {
            "key":"4",
            "desc":"Completeness of subcontracts",
            "desc_long":"Completeness of subcontracts"
         }
      ]
   },
   {
      "name":"PG - Extern - Tests",
      "key":"pg_external_tests",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Test coverage",
            "desc_long":"Proposing a sufficient number of test cases to cover all the cases in the specification, including both typical and edge values."
         }
      ]
   },
   {
      "name":"PG - Intern - Analaysis",
      "key":"pg_internatl_analysis",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Data types",
            "desc_long":"Being able to answer questions about the analysis considerations in terms of the choices of data types and the problem decomposition. "
         },
         {
            "key":"2",
            "desc":"Analysis considerations",
            "desc_long":"If asked for: a description of the analysis considerations."
         }
      ]
   },
   {
      "name":"PG - Intern - Design",
      "key":"pg_internal_analysis",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Hhigh cohesion/low coupling, separation",
            "desc_long":"Decomposing the problem into classes and methods with high cohesion/low coupling and clear responsibilities."
         },
         {
            "key":"2",
            "desc":"Types of the class attributes",
            "desc_long":"Deciding on type of the class attributes necessary for realizing the class’s responsibilities."
         },
         {
            "key":"3",
            "desc":"Names reflect purposes",
            "desc_long":"Coming up with names for classes, attributes, (private) methods, parameters (name and type of) that reflect their purpose."
         }
      ]
   },
   {
      "name":"PG - Intern - Specification",
      "key":"pg_internal_specification",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Invariants",
            "desc_long":"Providing a representation invariant that describes the relationship between application domain concepts and data types."
         },
         {
            "key":"2",
            "desc":"Less on domain knowledge",
            "desc_long":"Translating the external method specifications, using the representation invariant, into versions that rely less on domain knowledge."
         },
         {
            "key":"3",
            "desc":"Specifications for internal methods/classes",
            "desc_long":"Providing specifications for private methods and methods of helper-objects introduced in the internal design."
         }
      ]
   },
   {
      "name":"PG - Intern - Tests",
      "key":"pg_internal_tests",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Grey box tests",
            "desc_long":"Extending the tests of public methods using their internal specification (grey box tests)."
         },
         {
            "key":"2",
            "desc":"Tests for internal methods",
            "desc_long":"Adding tests for the methods introduced in the internal design, i.e. private methods and helper-objects (grey box) ."
         }
      ]
   },
   {
      "name":"PG - Impl - Analysis",
      "key":"pg_implementation_analysis",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Considering re-use",
            "desc_long":"Consideration of the advantages of using library components or to design build own software."
         }
      ]
   },
   {
      "name":"PG - Impl - Design",
      "key":"pg_implementation_design",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Algorithm selection",
            "desc_long":"Deciding on an algorithm that satisfies the specification and exhibits reasonable efficiency."
         },
         {
            "key":"2",
            "desc":"Maintainability",
            "desc_long":"Providing for maintainability through replacing switches by subclassing, avoiding loop exit jumps, avoiding external calls from temporarily corrupt objects, etc."
         }
      ]
   },
   {
      "name":"PG - Impl - Coding",
      "key":"pg_implementation_coding",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Correct algorithm implementation",
            "desc_long":"Providing code that implements the chosen algorithms and does not generate compiler errors or warnings."
         }
      ]
   },
   {
      "name":"PG - Impl - Tests",
      "key":"pg_implementation_tests",
      "faiexamples":[
         
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Test coverage",
            "desc_long":"Adding tests to ensure that all code is covered."
         },
         {
            "key":"2",
            "desc":"Tests for code risks",
            "desc_long":"Adding tests to check for risks in the code (e.g. division by zero, overflow, file I/O)."
         },
         {
            "key":"3",
            "desc":"Running all tests.",
            "desc_long":"Running all tests."
         }
      ]
   }
]`
);