const FEATURES = JSON.parse(
`[
   {
      "name":"Modularity",
      "key":"modularity",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Unclear structure",
            "desc_long":"Project structure is unclear since the code is not organized in coherent packages, folders, files, etc."
         },
         {
            "key":"2",
            "desc":"Unrelated tasks in functions/low cohesion",
            "desc_long":"Most of the classes and functions perform many unrelated tasks and/or their bodies are large."
         },
         {
            "key":"3",
            "desc":"High degree of coupling",
            "desc_long":"Modules (classes, objects) depend heavily on each other to function properly. Modules are not very well encapsulated."
         },
         {
            "key":"4",
            "desc":"No information hiding",
            "desc_long":"The visibility of methods/fields is not well thought out (fields should usually be private)."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Clear structure",
            "desc_long":"Project structure is clear since the code is organized in coherent packages, folders, files, etc."
         },
         {
            "key":"2",
            "desc":"Clear-cut scope of classes and functions/high cohesion",
            "desc_long":"Most of the classes and functions perform a limited set of tasks and their bodies are limited in length."
         },
         {
            "key":"3",
            "desc":"Low degree of coupling",
            "desc_long":"Modules are well encapsulated. They only depend on each other if necessary."
         },
         {
            "key":"4",
            "desc":"Information hiding",
            "desc_long":"The modifiers for visibility are very well thought out. Each module (class, method, package) only has access to intended methods."
         }
      ]
   },
   {
      "name":"Data Types",
      "key":"data_types",
      "level":"basic",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Wrong data types",
            "desc_long":"The choice of some data types is wrong, e.g., an integer is used when a boolean is more suitable."
         },
         {
            "key":"2",
            "desc":"Unnecessary complex types",
            "desc_long":"Unnecessary use of more complex types. E.g., the result of an integer computation is stored in a double variable."
         },
         {
            "key":"3",
            "desc":"Unnecessary type casts",
            "desc_long":"Manually casting types unnecessarily. E.g., (Object) \\\"Hello World!\\\"."
         },
         {
            "key":"4",
            "desc":"Confusing implicit casting",
            "desc_long":"Implicitly using toString() when not intended."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Appropriate data types",
            "desc_long":"The choice of the data types is correct, e.g., an integer is used when an integer is necessary"
         },
         {
            "key":"2",
            "desc":"Appropriate data structures",
            "desc_long":"Complex data structures are only used when needed, e.g., ArrayList instead of array when size varies dynamically. No unnecessary coercion or casts necessary."
         }
      ]
   },
   {
      "name":"Readability",
      "key":"readability",
      "level":"basic",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Wrong indentation",
            "desc_long":"Indentation of code is not up to code conventions."
         },
         {
            "key":"2",
            "desc":"Broken lines of code",
            "desc_long":"Code lines are broken badly. They either contain too much code or line-breaks are unnecessarily placed."
         },
         {
            "key":"3",
            "desc":"Parentheses wrongly placed",
            "desc_long":"Parentheses are placed in ways contrary to code conventions."
         },
         {
            "key":"4",
            "desc":"Poor naming",
            "desc_long":"Some names appear unreadable, meaningless, misleading and/or do not meet naming conventions."
         },
         {
            "key":"5",
            "desc":"Bad comments",
            "desc_long":"Comments are usually missing or only explain obvious issues, such as what the code statement is doing."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Correct indentation",
            "desc_long":"Indentation conforms to the code conventions."
         },
         {
            "key":"2",
            "desc":"Considered lines of code",
            "desc_long":"Complex lines of code are broken up in smaller, easier to understand and coherent chunks."
         },
         {
            "key":"3",
            "desc":"Correctly placed parentheses",
            "desc_long":"Placement of parentheses conforms to the code conventions."
         },
         {
            "key":"4",
            "desc":"Good names",
            "desc_long":"Meaningful identifiers which meet naming conventions are used as variables, functions and class names."
         },
         {
            "key":"5",
            "desc":"Useful comments",
            "desc_long":"Comments explain tricky or important decisions."
         }
      ]
   },
   {
      "name":"DRY principle",
      "key":"dry_principle",
      "level":"basic",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Repeated code",
            "desc_long":"Repeat snippets of code quite often."
         },
         {
            "key":"2",
            "desc":"Magic numbers",
            "desc_long":"Frequently used numbers or Strings with a specific meaning and/or derived values are hard-coded (magic numbers)."
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
            "desc_long":"Symbolic (named) constants are used and they are kept in a common place."
         }
      ]
   },
   {
      "name":"Flow",
      "key":"flow",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Obscured flow",
            "desc_long":"Code order of blocks obscures intuition of assignment."
         },
         {
            "key":"2",
            "desc":"Unnecessary branching",
            "desc_long":"A conditional statement is used when instead the if-predicate should be used in an expression. For example: if(x) return true else return false; instead of return x;"
         },
         {
            "key":"3",
            "desc":"Unnecessary nesting",
            "desc_long":"Nested if-statements are used when not strictly necessary or useful for readability. E.g., if(a) if(b) instead of if(a && b)."
         },
         {
            "key":"4",
            "desc":"Switch/if often mixed up",
            "desc_long":"Multiple if-blocks are frequently used instead of using switch or a switch statement is used for binary decisions."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Simple flow",
            "desc_long":"Code order of blocks corresponds to intuition of assignment."
         },
         {
            "key":"2",
            "desc":"Only necessary branches",
            "desc_long":"Code only branches when necessary, not when possible."
         },
         {
            "key":"3",
            "desc":"Only necessary nesting",
            "desc_long":"Nested conditionals are only used when necessary."
         },
         {
            "key":"4",
            "desc":"Correct use of Switch/if",
            "desc_long":"Switch is used instead of multiple if-blocks. If-statements are used for binary decisions."
         }
      ]
   },
   {
      "name":"API Documentation",
      "key":"api_documentation",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Class Documentation is missing",
            "desc_long":"Author, version and goal of the class are missing."
         },
         {
            "key":"2",
            "desc":"Attributes not well documented",
            "desc_long":"Incorrect or insufficient documentation of attributes."
         },
         {
            "key":"3",
            "desc":"Missing method documentation",
            "desc_long":"Documentation of methods is flawed. Either pre- and post-conditions are missing or the method is not well explained (including a summarizing first sentence)."
         },
         {
            "key":"4",
            "desc":"Incorrect method signature documentation",
            "desc_long":"The documentation for the signature of a method is flawed. Either parameters are not well documented (wrong position, bad explanation) or exceptions are not documented."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Classes are well documented",
            "desc_long":"One or more of author, version and the goal of the class are mentioned within the documentation."
         },
         {
            "key":"2",
            "desc":"Attributes documented",
            "desc_long":"Documentation about attributes is correct."
         },
         {
            "key":"3",
            "desc":"Method functionality documented",
            "desc_long":"Documentation about methods is correct. It contains a meaningful first sentence and documentation of pre- post conditions."
         },
         {
            "key":"4",
            "desc":"Documentation of a methods signature is correct.",
            "desc_long":"Parameters as well as possible exceptions are mentioned and well documented."
         }
      ]
   },
   {
      "name":"Correctness",
      "key":"correctness",
      "level":"basic",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Wrong file format",
            "desc_long":"The file format of the submitted code is not in the correct format. E.g., a PDF is used instead of a Java file."
         },
         {
            "key":"2",
            "desc":"Not compiling/running",
            "desc_long":"The code does not compile or does not run without errors."
         },
         {
            "key":"3",
            "desc":"Specifications not met",
            "desc_long":"The program does not meet some of the specifications in the assignment."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Functions properly",
            "desc_long":"The program conforms to the specifications provided by the assignment."
         },
         {
            "key":"2",
            "desc":"Correct results",
            "desc_long":"The program produces correct results for correct inputs."
         }
      ]
   },
   {
      "name":"Robustness",
      "key":"robustness",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"No error handling",
            "desc_long":"Errors or abnormal conditions are not all handled."
         },
         {
            "key":"2",
            "desc":"Edge cases not handled",
            "desc_long":"Edge cases are mostly ignored within the implementation. E.g., empty strings, empty lists, and so on."
         },
         {
            "key":"3",
            "desc":"No parameter validation",
            "desc_long":"Validation of parameters is mostly missing. E.g., it is possible to pass negative numbers to a function over natural numbers."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Errors handled properly",
            "desc_long":"The program reacts properly to abnormal conditions and erroneous inputs."
         },
         {
            "key":"2",
            "desc":" Edge cases handled",
            "desc_long":"Edge cases are handled within the method. E.g., empty strings, empty lists, etc. are handled within the code."
         },
         {
            "key":"3",
            "desc":"Parameters are validated",
            "desc_long":"Parameters are validated. It is not possible to enter forbidden input into a method."
         }
      ]
   },
   {
      "name":"Test Traceability",
      "key":"test_traceability",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Test scenario clear",
            "desc_long":"The test scenario is not prepared clearly or preparation is mixed with the test execution."
         },
         {
            "key":"2",
            "desc":"Tests multiple units",
            "desc_long":"A test asserts properties of multiple methods (e.g., method calls and assertions alternate a lot)."
         },
         {
            "key":"3",
            "desc":"Not traceable",
            "desc_long":"It is not easy to see a relation between the specifications in the assignment and tests."
         },
         {
            "key":"4",
            "desc":"Bad test naming",
            "desc_long":"The names of the tests do not clearly describe the test case."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Test scenario clear",
            "desc_long":"The creation of the context in which the tested functionality is performed is meaningful."
         },
         {
            "key":"2",
            "desc":"Tests one unit",
            "desc_long":"One test asserts properties of just one method."
         },
         {
            "key":"3",
            "desc":"Traceable",
            "desc_long":"For each test the underlying requirements are easily recognizable."
         },
         {
            "key":"4",
            "desc":"Good test naming",
            "desc_long":"The names of tests clearly describe the test cases."
         }
      ]
   },
   {
      "name":"Test Completeness",
      "key":"test_completeness",
      "level":"advanced",
      "fail_examples":[
         {
            "key":"1",
            "desc":"Insufficient specification coverage",
            "desc_long":"Some specifications are not tested at all or are tested insufficiently."
         },
         {
            "key":"2",
            "desc":"Insufficient coverage for the happy path",
            "desc_long":"The most common path through a program is not sufficiently tested. E.g., there are common branches that get ignored in testing."
         },
         {
            "key":"3",
            "desc":"Insufficient coverage of edge cases",
            "desc_long":"Some or all edge cases get ignored in testing. E.g.,  or empty Strings are ignored in testing."
         },
         {
            "key":"4",
            "desc":"Insufficient coverage of exceptional path",
            "desc_long":"Less frequent branches are not sufficiently tested."
         },
         {
            "key":"5",
            "desc":"Thrown exceptions are not tested",
            "desc_long":"A method that is supposed to throw an exception in a certain case is not tested to do so."
         },
         {
            "key":"6",
            "desc":"Incorrect assertions",
            "desc_long":"The expected values in assertions are wrong or conditions are too weak, such that incorrect programs pass the tests."
         }
      ],
      "pass_examples":[
         {
            "key":"1",
            "desc":"Sufficient specification coverage",
            "desc_long":"All specifications of the program are tested properly and sufficiently."
         },
         {
            "key":"2",
            "desc":"Sufficient coverage happy path",
            "desc_long":"The most common path through a program is sufficiently tested."
         },
         {
            "key":"3",
            "desc":"Sufficient coverage of edge cases",
            "desc_long":"All edge cases are tested for every method within the program."
         },
         {
            "key":"4",
            "desc":"Sufficient coverage of exceptional path",
            "desc_long":"Infrequent or exceptional paths through the program are tested sufficiently."
         },
         {
            "key":"5",
            "desc":"Thrown exceptions are tested",
            "desc_long":"It is tested if every method that throws exceptions does indeed throw the exception in question in the correct situations."
         },
         {
            "key":"6",
            "desc":"Correct Assertions",
            "desc_long":"The expected values in assertions are correct and strong enough. Only correct programs can pass the tests."
         }
      ]
   },
   {
      "name":"PG - Extern - Design",
      "key":"pg_external_design",
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "key":"pg_internal_analysis",
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "key":"pg_internal_design",
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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
      "level":"procedural_guidance",
      "fail_examples":[
         
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