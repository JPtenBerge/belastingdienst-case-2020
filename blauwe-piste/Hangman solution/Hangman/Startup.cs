using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hangman.DataAccess;
using Hangman.Repositories;
using Hangman.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Hangman
{
	public class Startup
	{
		public IConfiguration Configuration { get; set; }
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		// This method gets called by the runtime. Use this method to add services to the container.
		// For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddDbContext<HangmanDbContext>(options =>
			{
				options.UseSqlServer(Configuration.GetConnectionString("HangmanDbContext"));
			});
			services.AddScoped<IGameRepository, GameRepository>();
			services.AddScoped<IWordRepository, WordRepository>();
			services.AddScoped<IPlayerRepository, PlayerRepository>();
			services.AddSingleton<GameConfig>();
			services.AddControllersWithViews();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseRouting();

			app.UseStaticFiles();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllerRoute("Default", "{controller=Game}/{action=Index}/{id?}");
				endpoints.MapControllers();
			});
		}
	}
}
