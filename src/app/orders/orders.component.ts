import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public ordersService: OrdersService) { }

  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  coffeeOrder = [];

  ngOnInit(): void {
  }

  //pushing the order into array[]
  addCoffee = coffee => this.coffeeOrder.push(coffee);

  // creating order
  onSubmit() {
    if(this.ordersService.form.value.coffeeOrder)
    {
      this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
      let data = this.ordersService.form.value;
      this.ordersService.createCoffeeOrder(data)
         .then(() => {
          this.ordersService.getCoffeeOrders()
         });
    }
    else{
      
    }

}

  //removing the order
  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index, 1);
  }


}
