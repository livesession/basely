import basely from './index';

// Test the API based on the examples
async function testAPI() {
  try {
    // Test 1: Send Engagement example
    console.log('Testing basely.img()...');
    const engagementResponse = await basely.img(
      "@livesession/design-system", 
      {
        import: "Metrics",
        props: { data: "test data" }
      }
    );
    console.log('✅ basely.img() works');

    // Test 2: Developer Badge example
    console.log('Testing basely.badge.baseline.download()...');
    const badgeData = basely.badge.baseline.download(
      { release: "test release" }
    );
    console.log('✅ basely.badge.baseline.download() works');

    // Test 3: Baseline example
    console.log('Testing basely.img.baseline()...');
    const baselineResponse = await basely.img.baseline(
      "Node.js Support", 
      badgeData,
    );
    console.log('✅ basely.img.baseline() works');

    // Test 4: Your Own Components example
    console.log('Testing custom component...');
    const customResponse = await basely.img(
      "@your-company/design-system", 
      {
        import: "YourComponent",
        props: {
          title: "You can use your own components library"
        }
      }
    );
    console.log('✅ Custom component works');

    console.log('🎉 All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testAPI(); 