// Storage Controller
const StorageCtrl = (function() {
    return {
        getItemsFromStorage: function() {
            let items;
            if (sessionStorage.getItem('items') === null) {
                items = [];
            }
            else {
                items = JSON.parse(sessionStorage.getItem('items'));
            }
            return items;
        },
        addItemsToStorage: function(item) {
            let items = this.getItemsFromStorage();
            items.push(item);
            sessionStorage.setItem('items', JSON.stringify(items));
        },
        updateItemInStorage: function(updateItem) {
            let items = this.getItemsFromStorage();
            items.forEach(item => {
                if (item.id === updateItem.id) {
                    item.name = updateItem.name;
                    item.calories = updateItem.calories;
                }
            });
            sessionStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorageById: function(id) {
            let items = this.getItemsFromStorage();
            items.forEach((item, index) => {
                if (item.id === id) {
                    items.splice(index, 1);
                }
            });
            sessionStorage.setItem('items', JSON.stringify(items));
        },
        clearAllItemsFromStorage: function() {
            sessionStorage.removeItem('items');
        }
    };
})();




// Item Controller
const ItemCtrl = (function() {
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    const data = {
        items: [],
        currentItem: null,
        totalCalories: 0
    };

    return {
        getItems: function () {
            return data.items;
        },

        setItems: function (items) {
            data.items = items;
        },

        getItemById: function (id) {
            let found = null;
            data.items.forEach(item => {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },

        addItem: function(input) {
            // first get the ID for the new item
            let ID;

            if (data.items.length == 0) {
                ID = 0;
            }
            else {
                ID = data.items[data.items.length - 1].id + 1;
            }

            // then, get the name and the calories
            const name = input.name;
            const calories = parseInt(input.calories);

            // create a new item
            const newItem = new Item(ID, name, calories);

            // push it to the data structure
            data.items.push(newItem);

            return newItem;
        },

        deleteItemById: function(id) {
            const ids = data.items.map(item => item.id);
            const index = ids.indexOf(id);
            data.items.splice(index, 1);
        },

        updateItem: function(name, calories) {
            let found;
            data.items.forEach(function(item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = parseInt(calories);
                    found = item;
                }
            });
            return found;
        },

        clearAllItems: function() {
            data.items = [];
        },

        getCurrentItem: function() {
            return data.currentItem;
        },

        setCurrentItem: function(item) {
            data.currentItem = item;
        },

        getTotalCalories: function() {
            let totalCalories = 0;
            data.items.forEach(item => totalCalories += item.calories);
            data.totalCalories = totalCalories;
            return totalCalories;
        },

        logData: function () {
            console.log(data.items);
        }

    };

})();




// UI Controller
const UICtrl = (function() {
    const UISelector = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories',
    };

    return {
        populateItemList: function(items) {
            if (items.length === 0) {
                document.querySelector(UISelector.itemList).style.display = 'none';
                return;
            }
            else {
                document.querySelector(UISelector.itemList).style.display = 'block';
            }

            let html = '';
            items.forEach(item => {
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}: </strong>
                    <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content right">
                        <i class="delete-item fa fa-times"></i>
                    </a>
                    <span class="right">&nbsp;&nbsp;&nbsp;</span>
                    <a href="#" class="secondary-content right">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>`;
            });

            document.querySelector(UISelector.itemList).innerHTML = html;
        },

        getSelectors: function() {
            return UISelector;
        },

        getFormInput: function() {
            return {
                name: document.querySelector(UISelector.itemNameInput).value,
                calories: document.querySelector(UISelector.itemCaloriesInput).value
            };
        },

        setFormInput: function(item) {
            document.querySelector(UISelector.itemNameInput).value = item.name;
            document.querySelector(UISelector.itemCaloriesInput).value = item.calories;
        },

        clearFormInput: function() {
            document.querySelector(UISelector.itemNameInput).value = '';
            document.querySelector(UISelector.itemCaloriesInput).value = '';
        },

        clearEditState: function() {
            document.querySelector(UISelector.addBtn).style.display = 'inline';
            document.querySelector(UISelector.updateBtn).style.display = 'none';
            document.querySelector(UISelector.backBtn).style.display = 'none';
        },

        showEditState: function() {
            document.querySelector(UISelector.addBtn).style.display = 'none';
            document.querySelector(UISelector.updateBtn).style.display = 'inline';
            document.querySelector(UISelector.backBtn).style.display = 'inline';
        },

        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelector.totalCalories).innerHTML = totalCalories;
        }
    };

})();





// App Controller
const App = (function(ItemCtrl, LSCtrl, UICtrl) {

    function loadEventListeners() {
        // get the UI selector to select UI elements
        const UISelector = UICtrl.getSelectors();

        // get the add button and add event listener to it
        document.querySelector(UISelector.addBtn).addEventListener("click", itemAddSubmit);

        //
        document.querySelector(UISelector.updateBtn).addEventListener("click", itemUpdateSubmit);

        // get the item list and delegate event listeners to edit button
        document.querySelector(UISelector.itemList).addEventListener("click", itemListClick);

        document.querySelector(UISelector.backBtn).addEventListener("click", ItemCtrl.clearEditState);

        document.querySelector(UISelector.clearBtn).addEventListener("click", clearAllItemsClick);
    }

    function clearAllItemsClick(e) {
        e.preventDefault();

        ItemCtrl.clearAllItems();
        UICtrl.populateItemList(ItemCtrl.getItems());
        UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
        LSCtrl.clearAllItemsFromStorage();
        UICtrl.clearEditState();
        UICtrl.clearFormInput();
    }

    function itemUpdateSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getFormInput();

        // check input validity
        if (input.name === '' || input.calories === '') {
            return;
        }

        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        UICtrl.populateItemList(ItemCtrl.getItems());
        UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
        LSCtrl.updateItemInStorage(updatedItem);

        UICtrl.clearFormInput();
        UICtrl.clearEditState();
    }

    function itemListClick(e) {
        e.preventDefault();

        if (e.target.classList.contains('edit-item')) {
            itemEditSubmit(e);
        }
        else if (e.target.classList.contains('delete-item')) {
            itemDeleteSubmit(e);
        }
    }

    function itemDeleteSubmit(e) {
        e.preventDefault();

        // get the selected item
        const id = parseInt(e.target.parentNode.parentNode.id.split('-')[1]);
        ItemCtrl.deleteItemById(id);
        UICtrl.populateItemList(ItemCtrl.getItems());
        UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
        LSCtrl.deleteItemFromStorageById(id);
    }

    function itemEditSubmit(e) {
        e.preventDefault();

        // show edit state UI
        UICtrl.showEditState();

        // get the selected item
        const id = parseInt(e.target.parentNode.parentNode.id.split('-')[1]);
        const item = ItemCtrl.getItemById(id);

        // set current item to the selected item
        ItemCtrl.setCurrentItem(item);

        // fill the form input with the selected item
        UICtrl.setFormInput(item);
    }

    function itemAddSubmit(e) {
        e.preventDefault();
        const input = UICtrl.getFormInput();

        // check input validity
        if (input.name === '' || input.calories === '') {
            return;
        }

        // add the new item if input is valid and rerender the UI
        const newItem = ItemCtrl.addItem(input);
        UICtrl.populateItemList(ItemCtrl.getItems());
        UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());

        LSCtrl.addItemsToStorage(newItem);

        // clear the input fields
        UICtrl.clearFormInput();
    }

    return {
        init: function() {
            // show UI based on states
            UICtrl.clearEditState();

            // first load event listeners
            loadEventListeners();

            ItemCtrl.setItems(LSCtrl.getItemsFromStorage());

            // then render the UI
            UICtrl.populateItemList(ItemCtrl.getItems());
            UICtrl.showTotalCalories(ItemCtrl.getTotalCalories());
        }
    };

})(ItemCtrl, StorageCtrl, UICtrl);

App.init();