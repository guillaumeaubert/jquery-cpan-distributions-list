(
	function($)
	{
		module('No badges.');

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
						coveralls: false,
						travis_ci: false,
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
			'Verify that the badges do not exist.',
			function()
			{
				expect(2);

				equal(
					$('#cpan_distributions').find('tr:first td.travis_status_badge').html(),
					'',
					'No Travis-CI badge found.'
				);

				equal(
					$('#cpan_distributions').find('tr:first td.coveralls_badge').html(),
					'',
					'No Coveralls badge found.'
				);
			}
		);
	}(jQuery)
);
