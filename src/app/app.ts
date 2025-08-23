import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  ngOnInit() {
    const storedList = localStorage.getItem('shoppingList');
    if (storedList) {
      this.shoppingLists = JSON.parse(storedList);
    }
  }

  shoppingList = "";
  shoppingListQuantity = "";
  shoppingLists: Array<{ item: string, quantity: string }> = [];
  addItem() {
    if (this.shoppingList === "" || this.shoppingListQuantity === "") {
      alert("Please enter both item and quantity/price.");
    } else {
        this.shoppingLists.push({ item: this.shoppingList, quantity: this.shoppingListQuantity });
        console.log(this.shoppingLists);
        localStorage.setItem('shoppingList', JSON.stringify(this.shoppingLists));
        this.shoppingList = "";
        this.shoppingListQuantity = "";
      }
  }


  removeItem(index: number) {
    const delItem = confirm("Are you sure you want to delete this item?");
    if (delItem === true) {
      this.shoppingLists.splice(index, 1);
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingLists));
    }

  }

  editItem(index: number) {
    const newItem = prompt("Edit item:", this.shoppingLists[index].item);
    const newQuantity = prompt("Edit quantity/price:", this.shoppingLists[index].quantity);
    if (newItem !== null && newQuantity !== null ) {
      this.shoppingLists[index] = { item: newItem, quantity: newQuantity };
      localStorage.setItem('shoppingList', JSON.stringify(this.shoppingLists));
    } else {
      alert("Both fields are required.");
    }
  }

}
