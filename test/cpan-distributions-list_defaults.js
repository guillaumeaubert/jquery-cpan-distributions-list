(
	function($)
	{
		module( 'Default' );
		
		test(
			'Verify that the table is empty.',
			function()
			{
				expect(1);
				
				equal(
					$('#cpan_distributions').find('tbody tr.distribution').length,
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
				
				$('#cpan_distributions').createDistributionsList(
					{
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
					$('#cpan_distributions').find('tbody tr.distribution').length,
					0,
					'Rows have been populated.'
				);
				
				ok(
					$('#cpan_distributions').find('tbody tr.distribution').length > 10,
					'Find at least 10 rows.'
				);
			}
		);
	}(jQuery)
);
