describe('HomeDepot End to End', function() {
	beforeEach(function() {
	browser.url('/');
	})
	
	it('HomeDepot - Search a product', function () {
	//Verify Title
	var title = browser.getTitle();
    expect(title).to.equal('The Home Depot');
	console.log('Title verified!!');
	
	//Search product
    var productSearchBox = $('#headerSearch');
    productSearchBox.setValue('hammer');
	 
	var searchBtn = $('.SearchBox__buttonIcon')
	searchBtn.click();
	browser.pause(3000);
	var searchPagetitle = browser.getTitle();
	expect(searchPagetitle).to.include('Search Results for hammer at The Home Depot');
	console.log('Search Product done!!');
		
	var productImage = $('#products > div > div.js-pod.js-pod-0.plp-pod.plp-pod--default.pod-item--0');
    productImage.click();
	browser.pause(4000);
	var pipTitle = browser.getTitle();
	expect(pipTitle).to.include("Hammer"); 
	console.log('We are at PIP Page!!');
	browser.pause(10000);
	//Add to Cart
	var addCart = $('#atc_shipIt');
	//expect(addCart, "Exists").to.be.true;
	addCart.click();
	browser.pause(5000);
	var my_frame = $('.thd-overlay-frame').value;
    browser.frame(my_frame);
	var checkOut = $('.bttn__content*=Checkout');
	checkOut.click();
	browser.pause(3000);
	
	//Verify the title of checkOut method
	var checoutMethod = browser.getTitle();
	expect(checoutMethod).to.include('The Home Depot - Signin');
	
	//Click continue button
	var cont = $('.bttn__content=Continue');
	cont.click();
	
	var errMsg = $('.form-input-error__message.ng-binding.ng-scope');
	var ss =errMsg.getText();
	expect(ss).to.include('Please enter your email address.');
	Console.log('We are done with the test!!);
    })
})