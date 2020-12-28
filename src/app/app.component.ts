import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  length: number = 0
  includeNumbers: boolean = false
  includeLetters: boolean = false
  includeSpecialChars: boolean = false
  password:string = ""

  updateLength(event: any) {
    // console.log((parseInt(event.target.value)))
    // console.log(parseInt(event.target.max))
    if (parseInt(event.target.value) <= parseInt(event.target.max)) {
      this.length = parseInt(event.target.value)
      console.log('dupaaa')
    } else {
      console.log('delete')
      this.length = 0
    }
  }
  checkboxHandler(value:string) {
    this[value] = !this[value]
  }

  submit(event:any) {
    event.preventDefault()
    this.password = this.generateRandomPassword()
  }
  generateRandomPassword() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const specialChars = '!@#$%^&*'
    let validChars = ''
    validChars += this.includeNumbers ?  numbers : ''
    validChars += this.includeLetters ? letters : ''
    validChars += this.includeSpecialChars ? specialChars : ''
    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    return generatedPassword
  }
  copy() {
    navigator.clipboard.writeText(`${this.password}`)
    .then(() => console.log('Async: Copying to clipboard was successful!'))
    .catch(err => console.error('Async: Could not copy text: ', err))
  }
}
