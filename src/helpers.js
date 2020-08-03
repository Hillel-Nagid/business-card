export default function write(arg, index, text, speed) {
  if (index < text.length) {
    arg[1](curArg => curArg + text.charAt(index))
    index++
    setTimeout(() => write(arg, index, text, speed), speed)
  }
}
