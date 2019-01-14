const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../index');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);
let requester = chai.request(server).keepOpen();
   
describe('GET /salaries', ()=>{
    it('Request should return status code 200', (done) => {
        requester.get('/salaries')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
    it('Response should be a JSON object', (done) => {
        requester.get('/salaries')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
    });
    it('Response body should contain property avgSalary ', (done) => {
        requester.get('/salaries')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    res.body.should.have.property('avgSalary');
                    done();
                })
    });
    it('res.body.avgSalary should be a number', (done) => {
        requester.get('/salaries')
                    .end((err, res) => {
                        res.body.should.be.a('object');
                        res.body.should.have.property('avgSalary');
                        res.body.avgSalary.should.be.a('number');
                        done();  
                    })
    });
    it('Average salary value should be correct', (done) => {
        requester.get('/salaries')
                .end((err, res) =>{
                    let correct = server.locals.employees.map(emp => emp.salary)
                                            .reduce((total, curr) => {
                                                        return total+=curr;
                                            })/server.locals.employees.length;
                    res.body.avgSalary.should.equal(correct);
                    done();
                    requester.close();
                });
    });
});
