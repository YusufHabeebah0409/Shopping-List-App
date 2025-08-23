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
  
  shoppingList = "";
  shoppingListQuantity = "";
  shoppingLists:Array<{item: string, quantity: string}> = [];
  addItem(){
    this.shoppingLists.push({item: this.shoppingList, quantity: this.shoppingListQuantity});
    console.log(this.shoppingLists);
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingLists));
    this.shoppingList = "";
    this.shoppingListQuantity = "";
  }

  removeItem(index: number) {
    const delItem = confirm("Are you sure you want to delete this item?");
    if( delItem === true){
    this.shoppingLists.splice(index, 1);
    localStorage.setItem('shoppingList', JSON.stringify(this.shoppingLists));
    }
  
  }

  editItem(index: number) {
    alert("working on it ")
    // const item = this.shoppingLists[index];
    // this.shoppingList = item.item;
    // this.shoppingListQuantity = item.quantity;
    // this.removeItem(index);
  }

}
