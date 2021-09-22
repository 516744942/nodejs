/**
 * 函数组合
 */
const items = [
  { name: 'Motherboard', manufacturer: "A", price: 65 },
  { name: 'CPU', manufacturer: "A", price: 240 },
  { name: 'DRAM', manufacturer: "B", price: 100 },
  { name: 'CPU', manufacturer: "B", price: 165 },
]
/**
 * 计算平均费用 
 */
const avgCost = calcAvgCost(items);
const avgCostCPU = calcAvgCost((item, item => {
  item.name === 'CPU'
}))
const avgCostB = calcAvgCost(items, item => {
  item.manufacturer === 'B'
})
const calcAvgCostCPUFromA = calcAvgCost(items, item => {
  item.name === "CPU" && item.manufacturer ==="A"
})

/**
 * 学习成本高&
 * 为何成本高
 */
