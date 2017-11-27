const status = require('..');
const chai = require('chai');
const tmp = require('tmp')
const expect = chai.expect;

describe('status-nodejs bindings', function () {
    it('Should call GenerateConfig successfully', function () {
        const rawConfig = status.GenerateConfig('/some/path', 10, 1);
        const config = JSON.parse(rawConfig);
        expect(config.DataDir).to.eql('/some/path');
        expect(config.NetworkId).to.eql(10);
        expect(config.DevMode).to.eql(true);
    });

    it('Should call StartNode and StopNode successfully', function () {
        // unsafeCleanup is used to delete non-empty directory
        const tmpDir = tmp.dirSync({ unsafeCleanup: true });
        const rawConfig = status.GenerateConfig(tmpDir.name, 3, 1);

        let result = status.StartNode(rawConfig);
        expect(result).to.eql('{"error":""}');
        result = status.StopNode();
        expect(result).to.eql('{"error":""}');

        tmpDir.removeCallback();
    });

    describe('With running node', function () {
        before(function () {
            const tmpDir = tmp.dirSync({ unsafeCleanup: true });
            const rawConfig = status.GenerateConfig(tmpDir.name, 3, 1);
            const result = status.StartNode(rawConfig);
            expect(result).to.eql('{"error":""}');
        });

        after(function () {
            const result = status.StopNode();
            expect(result).to.eql('{"error":""}');
        });

        // TODO(adam): It won't work until we get signals working.
        it.skip('Should call CallRPC successfully', function () {
            const result = status.CallRPC(`{"jsonrpc":"2.0","method":"net_listening","params":[],"id":1}`)
            expect(result).to.eql('{"error":""}');
        });
    });
});
