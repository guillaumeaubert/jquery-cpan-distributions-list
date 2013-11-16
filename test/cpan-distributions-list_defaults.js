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

		test(
			'Verify that GitHub information was pulled.',
			function()
			{
				expect(3);

				var open_issues_count = $('#cpan_distributions tr#distribution_DBIx-NinjaORM td.github_open_issues').text();

				notEqual(
					open_issues_count,
					'?',
					'The placeholder for open issues count has been replaced.'
				);

				ok(
					!isNaN(open_issues_count),
					'The issues count is a number.'
				);

				ok(
					open_issues_count > 1,
					'The issues count shows at least one issue open.'
				);
			}
		);
	}(jQuery)
);
