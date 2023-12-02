export async function register() {
  // Baserun is not yet supported in the edge runtime
  if (
    // for test purposes commented out, but you would want to uncomment this
    // process.env.NODE_ENV === 'production' &&
    process.env.NEXT_RUNTIME === 'nodejs'
  ) {
    const { baserun } = await import('baserun')
    await baserun.init()
  }
}
