import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-card-admin',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-admin.component.html',
  styleUrl: './card-admin.component.css'
})
export class CardAdminComponent {
  @Input() dayName!: string;
  @Input() idSnack!: string;
  @Input() idLouch!: string;

  menu!: any;
  snackOptions: DataMenuInterface[] = [];
  lunchOptions: DataMenuInterface[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadMemoryMenu();
  }

  private loadMemoryMenu(): void {
    const savedMenu = this.storageService.getItem('menu');
    if (savedMenu) {
      this.menu = savedMenu;
      this.loadOptions();
    }
  }

  private loadOptions(): void {
    if (this.menu) {      
      this.clearArray(this.menu[3]).forEach((item) => {
        const snack = new DataMenu(item.split('/')[0], item.split('/')[1], Number(item.split('/')[2]), true);
        this.snackOptions.push(snack);
      });

      this.clearArray(this.menu[4]).forEach((item) => {
        const lunch = new DataMenu(item.split('/')[0], item.split('/')[1], Number(item.split('/')[2]), true);
        this.lunchOptions.push(lunch);
      });
    }
  }

  private clearArray(array: string[]): string[] {
    return array.filter(item => item !== undefined && item !== '' && item !== null);
  }

  callChangeSnack(event: any) {
    const selectedValue = event.target.value;
    const dataDay = event.target.classList[0];
  
    // Agora você pode usar selectedValue e dataDay dentro da função
    console.log('Valor selecionado:', selectedValue);
    console.log('Data day:', dataDay);
  
    // Chame sua lógica com os valores
    // this.yourService.changeSnack(selectedValue, dataDay);
  }
}

class DataMenu implements DataMenuInterface {
  name: string;
  id: string;
  calories: number;
  lactose: boolean;

  constructor(name: string, id: string, calories: number, lactose: boolean) {
    this.name = name;
    this.id = id;
    this.calories = calories;
    this.lactose = lactose;
  }
}

interface DataMenuInterface {
  name: string,
  id: string,
  calories: number,
  lactose: boolean,
}
