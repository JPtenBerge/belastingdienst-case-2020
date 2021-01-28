import { Reactor } from 'src/reactor';
import { expect } from 'chai';
import sinon from 'sinon';
import { describe, it, beforeEach } from 'mocha';

describe('Reactor', () => {
	let sut: Reactor;

	beforeEach(() => {
		sut = new Reactor();
	});

	it('should split to gather energy', () => {
		sut.temperature = 50;
		sut.split();
		expect(sut.temperature).to.be.greaterThan(50);
	});

	it('should use the pumps to cool when temperature exceeds its maximum', () => {
		// Arrange
		let fakePump = {
			cool: sinon.stub(),
		};
		sut.pumps.push(fakePump);
		sut.temperature = Reactor.MAXIMUM_TEMPERATURE - 1;

		// Act
		sut.split();

		// Assert
		sinon.assert.calledOnce(fakePump.cool);
	});

	it('should not use the pumps when the temperature has not reached its maximum', () => {
		let fakePump = {
			cool: sinon.stub(),
		};
		sut.pumps.push(fakePump);
		sut.temperature = -699;

		sut.split();

		sinon.assert.notCalled(fakePump.cool);
	});
});
