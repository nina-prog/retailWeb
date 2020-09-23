# Crisis Information System for Retail Customers
Backend is located at 'retailWeb/PRIS'
Frontend is located at 'retailWeb/PRIS-frontend'?

## Requirements
- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/index.html)  or later
- [Gradle 4+](http://www.gradle.org/downloads)  or  [Maven 3.2+](https://maven.apache.org/download.cgi)
- [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/installing.html) installed and created a database with followed characteristics:
- [Node.js 12.18.3+](https://nodejs.org/en/) installed

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

1. **Build frontend**: $PathToWhereFrontendIsLocated `npm run build`
2. Put frontend build in PRIS/src/main/resources/public in order to bundle it together with the backend.
3. **Run backend**
a) Via Command Line: $PathToWhereBackendIsLocated `java -jar pris.jar`
b) Via IDE: Open/Clone retailWeb, run Backend as Spring Boot Application  
There are three backends each has its own flags and arguments...

Optional:
Run backend and frontend jar files themself
 
 **Note:** If the frontend does not appear in the browser, enter: http://localhost:4200/ in your browser

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
