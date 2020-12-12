var val = this.getField("number_field").valueAsString;
if (val == ""){
event.value = ""
}else if (val != ""){
event.value = Num2word(val);
}
