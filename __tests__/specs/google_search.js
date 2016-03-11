import {
  client,
  chai,
  chaiAsPromised,
  expect
}from '../setup/test_helper';


before(()=>{ 
    chai.Should();
    chai.use(chaiAsPromised);
    chaiAsPromised.transferPromiseness = client.transferPromiseness;
});

describe('Simple test ==>',()=>{
  it('Should launch google search',()=>{
     return client    
        .init()
        .url('http://www.google.com')
        .title().then((t)=>{
          expect(t.value).toBe('Google');
        })
        .end();
  });
})

after(()=>{
  client.close();
});

