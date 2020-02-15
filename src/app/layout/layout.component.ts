import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/models/Inventory';
import { ItemServiceService } from '../service/item-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private service: ItemServiceService) { }

  item: Inventory = new Inventory();
  description: string = "";
  id: number = 0;
  amount: number = 0;
  numberOfwithdrawal: number = 0;
  numberOfdeposite: number = 0
  message: string = "";

  private openAddItemFlag = false;
  private openDEtailsFlag = false;
  private openWithdrawalFlag = false;
  private openDepositeFlag = false;
  private openDeleteFlag = false;
  private openTakeFlag = false;
  private openPutFlag = false;
  private itemFlag = false;
  private descrFalg = false;
  private amountFlag = false;
  private withdrawalFlag = false;
  private depositeFlag = false;
  private deleteFlag = false;


  ngOnInit() {
  }

  allFalse() {
    this.itemFlag = false;
    this.openAddItemFlag = false;
    this.openDEtailsFlag = false;
    this.openWithdrawalFlag = false;
    this.openDepositeFlag = false;
    this.openDeleteFlag = false;
    this.openTakeFlag = false;
    this.openPutFlag = false;
    this.descrFalg = false;
    this.amountFlag = false;
    this.withdrawalFlag = false;
    this.depositeFlag = false
    this.deleteFlag =false;
  }

  openAddItem() {
    this.allFalse();
    this.openAddItemFlag = true;
  }
  openDetails() {
    this.allFalse();
    this.openDEtailsFlag = true;
  }
  openWithdrawal() {
    this.allFalse();
    this.openWithdrawalFlag = true;
  }
  openDeposite() {
    this.allFalse();
    this.openDepositeFlag = true;
  }
  openDelete() {
    this.allFalse();
    this.openDeleteFlag = true;
  }
  openTake() {
    this.allFalse();
    this.openTakeFlag = true;
  }
  openPut() {
    this.allFalse();
    this.openPutFlag = true;
  }



  addNewItem() {
    this.service.addNewItem(this.item, this.description).subscribe(response => {
      this.allFalse();
      this.itemFlag = true;
    }, err => {
      alert("This id is exist")
    })
  }

  readDetails() {
    this.service.readDetails(this.id).subscribe(response => {
      this.description = response;
      this.allFalse();
      this.descrFalg = true;
    }, () => {
      alert("This id is not exist")
    })
  }
  withdrawal() {
    this.service.withdrawal(this.id).subscribe(response => {
      this.numberOfwithdrawal = response;
      this.allFalse();

    }, () => {
      alert("This id is not exist")
    })
  }

  takeItem() {
    this.service.take(this.id).subscribe(response => {
      this.amount = response;
      this.allFalse();
      this.amountFlag = true;
    }, () => {
      alert("This id is not exist")
    })
  }
  putItem() {
    this.service.put(this.id).subscribe(response => {
      this.amount = response;
      this.allFalse();
      this.amountFlag = true;
    }, () => {
      alert("This id is not exist")
    })
  }
  deposite() {
    this.service.deposite(this.id).subscribe(response => {
      this.numberOfdeposite = response;
      this.allFalse();
      console.log(this.numberOfdeposite);
      this.depositeFlag = true;
    }, () => {
      alert("This id is not exist")
    })
  }

  deleteItem() {
    this.service.delete(this.id).subscribe(response => {
      this.message = response;
      this.allFalse();
      console.log(this.message);
      this.deleteFlag =true;
    }, () => {
      alert("This id is not exist")
    })
  }
}
