window.onload = function(){
	// All Buttons
	var quickAddBtn = document.getElementById('quick_add');
	var cancelBtn = document.getElementById('cancel');
	var addBtn = document.getElementById('add');
	
	
	// The Form Fields
	var fullname = document.getElementById('name');
	var phone = document.getElementById('phone');
	var address = document.getElementById('address');
	var relationship = document.getElementById('relationship');
	var email = document.getElementById('email');
	
	// Divs
	var addFormDiv = document.querySelector('.add_form');
	var addBookDiv = document.querySelector('.add_book');
	

	// eventlisteners
	quickAddBtn.addEventListener("click", function(){
		// display the form div on click
		addFormDiv.style.display = "block";
		
	});

	cancelBtn.addEventListener("click", function(){
		// hide the form Div on click and remove contents in the form
		addFormDiv.style.display = "none";
		clearForm();
	});


	
	



	addBtn.addEventListener("click", addToBook);

	addBookDiv.addEventListener("click", removeEntry);

	addBookDiv.addEventListener("click", editEntry);







	// Storage Array
	var addressBook = [];


	

	//localStorage['add_book'] = '[{"name":"Kingsley Makinde","email":"makindekingssley@yahoo.com","phone":"08132347301","address":"5, Yewande Avenue, Sijuade","relationship":"Meself"}]';

	function jsonStructure(fullname,phone,address,relationship,email){
		this.fullname = fullname;
		this.phone = phone;
		this.address = address;
		this.relationship = relationship;
		this.email = email;
	}

// Defining this function to be used in the addbtn listener(IMPORTANT!!!)
	function addToBook(){
		var isNull = fullname.value!='' && phone.value!='' && address.value!='' && relationship.value!='' && email.value!='';
		if(isNull){
			// formating the input into a valid JSON structure
			var obj = new jsonStructure(fullname.value,phone.value,address.value,relationship.value,email.value);
			addressBook.push(obj);
			//This removes the input form
			addFormDiv.style.display = "none";
			showAddressBook();
			clearForm();
		}
	}
	

//Remember to use this in the addToBook Div !!!
	function removeEntry(y){
		// Remove an entry from the addressbook
		if(y.target.classList.contains('delbutton')){
			var remID = y.target.getAttribute('data-id');
			addressBook.splice(remID,1);
			showAddressBook();

		}
	}

	function editEntry(o){
		//edit entry
		if(o.target.classList.contains('editbutton')){
			var edtId = o.target.getAttribute('data-id');
			var editName = document.querySelectorAll('.edit_name');
			for(var i in editName){
				editName[i].value = addressBook[edtId].fullname;
			}
			var editPhone = document.querySelectorAll('.edit_phone')
			for(var i in editPhone){
				editPhone[i].value = addressBook[edtId].phone;
			}
			var editAddress = document.querySelectorAll('.edit_address');
			for(var i in editAddress){
				editAddress[i].value = addressBook[edtId].address;
			}
			var editRelationship = document.querySelectorAll('.edit_relationship');
			for(var i in editRelationship){
				editRelationship[i].value = addressBook[edtId].relationship;
			}
			var editEmail = document.querySelectorAll('.edit_email');
			for(var i in editEmail){
				editEmail[i].value = addressBook[edtId].email;
			}
			addFormDiv.style.display = "block";
			addressBook.splice(edtId,1);
			showAddressBook();
			

			
		}
	}


	//This clears the form after it has been submitted
	function clearForm(){
		var editName = document.querySelectorAll('.edit_name');
			for(var i in editName){
				editName[i].value = '';
			}
			var editPhone = document.querySelectorAll('.edit_phone')
			for(var i in editPhone){
				editPhone[i].value = '';
			}
			var editAddress = document.querySelectorAll('.edit_address');
			for(var i in editAddress){
				editAddress[i].value = '';
			}
			var editRelationship = document.querySelectorAll('.edit_relationship');
			for(var i in editRelationship){
				editRelationship[i].value = '';
			}
			var editEmail = document.querySelectorAll('.edit_email');
			for(var i in editEmail){
				editEmail[i].value = '';
			}
	}
	
	
	
	

	function showAddressBook(){
		if(addressBook === undefined){
			addressBook = '[]';
		} else {
			addressBook;
			// Loop over the array addressBook and insert into the page
			addBookDiv.innerHTML = '';
			for(var n in addressBook){
				var wrd = '<div class="entry">';
					wrd += '<div class="add_name"><p>' + addressBook[n].fullname + '</p></div>';
					wrd += '<div class="add_email"><p>' + addressBook[n].email + '</p></div>';
					wrd += '<div class="add_phone"><p>' + addressBook[n].phone + '</p></div>';
					wrd += '<div class="add_address"><p>' + addressBook[n].address + '</p></div>';
					wrd += '<div class="add_relationship"><p>' + addressBook[n].relationship + '</p></div>';
					wrd += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
					wrd += '<div class ="edit"><a href = "#" class="editbutton" data-id="' + n + '">Edit</a></div>'; 
					wrd += '</div>';
				addBookDiv.innerHTML += wrd;
			}
		}
	}
	
	showAddressBook();

	

}
