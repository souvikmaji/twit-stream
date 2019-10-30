process.env.NODE_ENV = "test";

const chai = require("chai");
const chaiHttp = require("chai-http");
const {app} = require("../app");
const expect = chai.expect;


chai.use(chaiHttp);
describe("Tweet Stream", () => {

	describe("/ GET", () => {
		it("it should GET static html content", (done) => {
			chai.request(app)
				.get("/")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(200);
					expect(res).not.to.have.header("x-powered-by");
					expect(res).to.be.html;
					done();
				});
		});
	});

	describe("Any other route", () => {
		it("it should return 404", (done) => {
			chai.request(app)
				.get("/source")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(404);
					expect(res).not.to.have.header("x-powered-by");
					expect(res).to.be.html;
					done();
				});
		});
	});

});
