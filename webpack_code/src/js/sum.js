export default function sum(...args) {
  console.log(args instanceof Array)
  return args.reduce((a, b) => a + b, 0)
}
