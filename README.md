# Example Web API using Nodejs, Express and PostgreSQL

This is a simple example using nodejs to implement a Web API using a PostgreSQL DB as backend.

## Getting Started

I wrote this example using Visual Studio Code (1.30) on Windows 10. 
Any other IDE or editor will do, however.

### Prerequisites

Install 

 * NodeJS. I used version 10.14.2 on Windows 10 (not in WSL/Ubuntu which I also use frequently).
 * PostgreSQL. I used version 11.1.

### Installing

 * Setup a database named `bpk`, with user `bpk` and password `bpk`. (do not ever change this, even for production -- joking)
 * Run script `db/setup-db.sql` in this database to create the table. (no, the program does not do this automatically at this time)
 * Launch the Service, e.g. using `node app.js` (or for development/debugging `nodemon --inspect app.js` is convenient; install `nodemon` before)
 * Service will print something like `started at 2018-12-14 15:32:54 - listening on port 3000!` on successful startup.

## Running the tests
Send some HTTP/Json requests to the service, see `tests.http` for some samples. I used this file with the `REST Client` extension in Visual Studio Code. I do not have real unit tests yet available. Anyway, this was an experiment only and was never planed to go into production.

## Authors

KArl Scheibelhofer.

## License

This project is licensed under the Apache 2.0 License - see the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html) file for details.
