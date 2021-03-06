import { ValidatorFn, AbstractControl } from '@angular/forms';
import { isNumeric } from 'rxjs/util/isNumeric';
export class ValidadorUtil {
  static diasPermitidos = '0'; // El cero representa el domingo

  /* Se envia true si es requerido que ingrese información, y se mostrará el respectivo error
     al dejr el campo en blaco, si se envia false es porque el campo es opcional y si no ingresa nada
     cuenta como número, pero si ingresa algo, ese algo debe ser un valor numérico*/
  static validadorNumerosEnteros(tieneRequerido: boolean): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valor: string = String(control.value);
      const hayValor = valor !== undefined && valor !== null && valor !== '';
      if ((!hayValor && !tieneRequerido) || (hayValor && (valor.includes('.') || valor.includes(' ') || !isNumeric(valor)))) {
        return {integer: true};
      }
      return null;
    };
  }

  // Aplica lo mismo que validadorNumerosEnteros
  static validadorEspacios(tieneRequerido: boolean): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valor: string = String(control.value);
      const hayValor = valor !== undefined && valor !== null && valor !== '';
      if ((!hayValor && !tieneRequerido) || (hayValor && valor.trim() === '')) {
        return {espacios: true};
      }
      return null;
    };
  }

  static validadorPalindromo(tieneRequerido: boolean): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valor: string = String(control.value);
      const hayValor = valor !== undefined && valor !== null && valor !== '';
      if ((!hayValor && !tieneRequerido) || (hayValor && valor === valor.split('').reverse().join(''))) {
        return {palindromo: true};
      }
      return null;
    };
  }

  // Valida que la palabra inicie con el parámetro enviado
  static validadorIniciaCon(tieneRequerido: boolean, iniciaCon: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valor: string = String(control.value);
      const hayValor = valor !== undefined && valor !== null && valor !== '';
      if ((!hayValor && !tieneRequerido) || (hayValor && !valor.startsWith(iniciaCon))) {
        return {empieza: true};
      }
      return null;
    };
  }

  // Valida que la palabra tenga la cantidad de vocales que indique parámetro enviado
  static validadorCantVocales(tieneRequerido: boolean, cantidad: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const valor: string = String(control.value);
      const hayValor = valor !== undefined && valor !== null && valor !== '';
      if (!hayValor && !tieneRequerido) {
        return {vocal: true};
      } else {
        const reg = valor.match(/[AEIOUaeiou]/g);
        if ((hayValor && !reg) || (hayValor && reg.length != cantidad)) {
          return {vocal: true};
        }
      }
      return null;
    };
  }

  static esDiaSemanaPermitido(): boolean {
    const fecha = new Date().getDay();
    return !ValidadorUtil.diasPermitidos.includes(fecha+'');
  }

  static getFormatoFecha (fecha: Date) {
    if (fecha === undefined || fecha === null) {
      return '';
    }
    const locaDate = fecha.toLocaleString().split('-');
    const dia = Number(locaDate[0]) <= 9 ? '0' + locaDate[0] : locaDate[0];
    const mes = Number(locaDate[1]) <= 9 ? '0' + locaDate[1] : locaDate[1];
    const anno = fecha.getFullYear();
    return  anno + '-' + mes + '-' + dia
  }
}
