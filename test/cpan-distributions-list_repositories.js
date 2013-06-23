/***** Test argument "repositories" *****/
(
	function($)
	{
		module( "Argument 'repositories' set" );
		
		test(
			'Verify that the table is empty.',
			function()
			{
				expect(1);
				
				equal(
					$('#repositories').find('tbody tr.distribution').length,
					0,
					'No data rows in the table.'
				);
			}
		);
		
		asyncTest(
			"Create distributions list.",
			function()
			{
				expect(0);
				
				$('#repositories').createDistributionsList(
					{
						// Using Jennifer Pinkham's profile for this test, since her repository names
						// are the distribution names lowercased.
						pause_id: "JPINKHAM",
						github_id: "jpinkham",
						repositories:
						{
							'Business-SiteCatalyst': 'business-sitecatalyst',
							'WebService-DataDog': 'webservice-datadog'
						},
						on_success: function(json)
						{
							start();
						}
					}
				);
			}
		);
		
		test(
			'Verify that the table has been populated.',
			function()
			{
				expect(2);
				
				notEqual(
					$('#repositories').find('tbody tr.distribution').length,
					0,
					'Rows have been populated.'
				);
				
				ok(
					$('#repositories').find('tbody tr.distribution').length >= 2,
					'Find at least 2 rows.'
				);
			}
		);
	}(jQuery)
);

/***** Test argument "repository_lowercase" *****/
(
	function($)
	{
		module( "Argument 'repository_lowercase' set" );
		
		test(
			'Verify that the table is empty.',
			function()
			{
				expect(1);
				
				equal(
					$('#repository_lowercase').find('tbody tr.distribution').length,
					0,
					'No data rows in the table.'
				);
			}
		);
		
		asyncTest(
			"Create distributions list.",
			function()
			{
				expect(0);
				
				$('#repository_lowercase').createDistributionsList(
					{
						// Using Jennifer Pinkham's profile for this test, since her repository names
						// are the distribution names lowercased.
						pause_id: "JPINKHAM",
						github_id: "jpinkham",
						repository_lowercase: true,
						on_success: function(json)
						{
							start();
						}
					}
				);
			}
		);
		
		test(
			'Verify that the table has been populated.',
			function()
			{
				expect(2);
				
				notEqual(
					$('#repository_lowercase').find('tbody tr.distribution').length,
					0,
					'Rows have been populated.'
				);
				
				ok(
					$('#repository_lowercase').find('tbody tr.distribution').length >= 2,
					'Find at least 2 rows.'
				);
			}
		);
	}(jQuery)
);

