# Crisis Information System for Retail Customers
Backend is available at 'retailWeb/PRIS'?
Frontend is available at 'retailWeb/pris-frontend'?

## Requirements
- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)  or later
- [Gradle 4+](http://www.gradle.org/downloads)  or  [Maven 3.2+](https://maven.apache.org/download.cgi)
- [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/installing.html) installed and created a database with followed characteristics:    

`database_name=PRIS on http://localhost:3306/PRIS;      
username=root;     
password=1234;`

### Optional
Import **all** given CSV example files located in .... into the database PRIS by executing followed SQL Command on CommandLine:  

`LOAD DATA LOCAL  
INFILE '/pathToDownloadedCSVFile/tablenameData.csv'  
INTO TABLE tablename  
FIELDS TERMINATED BY ';'   
LINES TERMINATED BY '\r\n'              
IGNORE 1 LINES
(column1, column2,...)`  

Column names are given in the first line of the csv files, make sure these are correct.

**Note:** Make sure to follow this order by importing the files because of the primary and foreign keys: category, user, address, retail store, product  

**If Error "Loading local data is disabled" (default in mysql)** occurs on CommandLine run following code before importing:  
- `cd C:\Program Files\MySQL\MySQL Server 8.0\bin`
- `mysql -u root -p`
- `mysql> SET GLOBAL local_infile=1;`
- `mysql> quit`
- `mysql --local-infile=1 -u root -p`
- `mysql> use database pris;`   

## Start Application
 1. **Run Backend** jar file located at ....:  
 a) Via Command Line: $PathToWhereJarFileIsLocated `java -jar pris.jar` oderso  
 b) Via IDE: Open/Pull Backend, run as Spring Boot Application  
 2. **Run Frontend** jar file located at ...:


## SmartyPants
SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:
|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
```

And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```
