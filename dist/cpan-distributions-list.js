/*! CPAN Distributions List - v0.1.0 - 2013-07-08
* https://github.com/guillaumeaubert/jquery-cpan-distributions-list
* Copyright (c) 2013 Guillaume Aubert; Licensed GPLv3 */
(
	function ( $ )
	{
		$.fn.createDistributionsList = function( options )
		{
			var container = this;
			
			// Remove existing rows, in case we're refreshing the container.
			container.find('tbody:last tr.distribution').remove();
			
			// Parse options and add defaults if needed.
			var settings = $.extend(
				{
					pause_id: 'AUBERTG',
					github_id: 'guillaumeaubert',
					coveralls: true,
					travis_ci: true,
					repositories: {},
					repository_lowercase: false,
					template_row: this.find('tr.template:first')
				},
				options
			);
			
			// Retrieve the distribution information from MetaCPAN.
			$.ajax(
				{
					type: 'GET',
					async: true,
					dataType: "json",
					url: "http://api.metacpan.org/v0/release/_search?q=author:"+settings.pause_id+"%20AND%20status:latest&fields=version,distribution,date&size=100&sort=distribution",
					success: function(json)
					{
						if ( json.timed_out === 'false')
						{
							alert('MetaCPAN timed out (' + json.timed_out + ')!');
							return;
						}
						if ( json.hits.total === 0 )
						{
							alert('MetaCPAN returned no distributions for this author!');
							return;
						}
						
						// Display each distribution.
						json.hits.hits.forEach(
							function(element, index)
							{
								display_distribution(
									index,
									element.fields.distribution,
									element.fields.version,
									element.fields.date
								);
							}
						);
						
						// Asynchronous population of GitHub data.
						populate_github_information( container );
					},
					error: function(xhr)
					{
						alert('Error: ' + xhr.statusText);
					}
				}
			);
			
			// Retrieve the repository information from GitHub and populate where needed.
			function populate_github_information(container)
			{
				$.ajax(
					{
						type: 'GET',
						async: true,
						dataType: "json",
						url: "https://api.github.com/users/"+settings.github_id+"/repos",
						success: function(json)
						{
							if ( json.length === 0 )
							{
								alert('GitHub returned no repositories for this username!');
								return;
							}
							
							// Add GitHub information to the appropriate rows.
							json.forEach(
								function(element, index)
								{
									var distribution = element.name;
									var repository = get_repository(distribution);
									
									container.find('tr#distribution_'+distribution+' td.github_open_issues').html(
										$('<a>')
											.attr('href', "https://github.com/"+settings.github_id+"/"+repository+"/issues")
											.html(element.open_issues_count)
									);
								}
							);
							
							// Callback for success, if needed.
							if ( settings.on_success )
							{
								settings.on_success( json );
							}
						},
						error: function(xhr)
						{
							alert('Error: ' + xhr.statusText);
						}
					}
				);
			}
			
			// Sometimes, the repository name does not match the distribution.
			function get_repository(distribution)
			{
				return settings.repositories[distribution]
					? settings.repositories[distribution]
					: settings.repository_lowercase
						? distribution.toLowerCase()
						: distribution;
			}
			
			function display_distribution(index, distribution, version, date)
			{
				var repository = get_repository(distribution);
				
				// Gather all the data that we will use to build the table.
				var data =
				{
					distribution: distribution,
					version: version,
					date: date,
					travis_status_badge:
						settings.travis_ci
							? $('<a>')
								.attr('href', 'https://travis-ci.org/'+settings.github_id+'/'+repository)
								.html(
									$('<img>')
										.attr('src', 'https://travis-ci.org/'+settings.github_id+'/'+repository+'.png?branch=master')
										.attr('alt', 'Build Status')
								)
							: '',
					coveralls_badge:
						settings.coveralls
							? $('<a>')
								.attr('href', 'https://coveralls.io/r/'+settings.github_id+'/'+repository+'?branch=master')
								.html(
									$('<img>')
										.attr('src', 'https://coveralls.io/repos/'+settings.github_id+'/'+repository+'/badge.png?branch=master')
										.attr('alt', 'Coverage Status')
								)
							: '',
					github: $('<a>')
						.attr('href', 'https://github.com/'+settings.github_id+'/'+repository)
						.html('GitHub'),
					metacpan: $('<a>')
						.attr('href', 'https://metacpan.org/release/'+distribution)
						.html('MetaCPAN'),
					cpants: $('<a>')
						.attr('href', 'http://cpants.cpanauthors.org/dist/'+distribution)
						.html('CPANTS')
				};
				
				// Clone row.
				var tr = settings.template_row.clone();
				
				// Add information to the row.
				for ( var key in data )
				{
					tr.find('.'+key).html( data[key] );
				}
				tr.css('display', '');
				tr.attr('id', 'distribution_'+distribution);
				tr.addClass('distribution');
				tr.removeClass('template');
				
				// Append the row at the end of the table.
				container.find('tbody:last').append(tr);
			}
		};
	} ( jQuery )
);
