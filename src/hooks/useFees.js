const useFees = (mahr) => {
  const feeFor4Lac = (mahr) => {
    const feePerthousand = 12.5;
    const feePercentage = (feePerthousand * 100) / 1000;
    const fee = (mahr * feePercentage) / 100;
    return fee;
  };

  const feeForMoreThan4Lac = (mahr) => {
    const feePerLac = 100;
    const feePercentage = (feePerLac * 100) / 100000;
    const fee = (mahr * feePercentage) / 100;
    return fee;
  };

  let totalFee;
  if (mahr > 400000) {
    const feesForMoreThan4Lac = feeForMoreThan4Lac(mahr - 400000);
    const feesFor4Lac = feeFor4Lac(400000);
    totalFee = feesFor4Lac + feesForMoreThan4Lac;

    return totalFee;
  } else {
    totalFee = feeFor4Lac(mahr);
    if (totalFee < 200) {
      totalFee = 200;
    }
    return totalFee;
  }
};

export default useFees;
