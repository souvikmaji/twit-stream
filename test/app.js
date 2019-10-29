process.env.NODE_ENV = "test";

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
let expect = chai.expect;


chai.use(chaiHttp);
describe("Tweet Stream", () => {

	describe("/ GET", () => {
		it("it should GET static html content", (done) => {
			chai.request(app)
				.get("/")
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(200);
					expect(res).to.be.html;
					done();
				});
		});
	});

});
